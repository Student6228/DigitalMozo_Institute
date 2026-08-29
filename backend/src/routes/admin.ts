import bcrypt from "bcryptjs";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { db } from "../db.js";
import { authenticateAdmin, type AuthenticatedRequest } from "../middleware/auth.js";

const JWT_SECRET = process.env.JWT_SECRET ?? "digitalmozo-institute-jwt-secret-2024-change-in-prod";
const DEFAULT_ADMIN_EMAIL = "faizur544@gmail.com";
const DEFAULT_ADMIN_PASSWORD = "Faizur@7035";

export const adminRouter = Router();

// Ensure at least one admin exists in database
export async function ensureDefaultAdmin() {
  try {
    const passwordHash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);
    await db.user.upsert({
      where: { email: DEFAULT_ADMIN_EMAIL.toLowerCase() },
      update: {
        passwordHash,
        role: "ADMIN",
        status: "ACTIVE",
      },
      create: {
        name: "Institute Administrator",
        email: DEFAULT_ADMIN_EMAIL.toLowerCase(),
        passwordHash,
        role: "ADMIN",
        status: "ACTIVE",
        phone: "8638443812",
      },
    });
    console.log(`[Database] Ensured admin user active: ${DEFAULT_ADMIN_EMAIL}`);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (!msg.includes("Unique constraint")) {
      console.error("[Database] Error initializing default admin user:", err);
    }
  }
}

// -------------------------------------------------------------
// Public Auth Endpoints
// -------------------------------------------------------------

// Admin login
adminRouter.post("/auth/admin-login", async (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required." });
    return;
  }

  try {
    await ensureDefaultAdmin();

    const user = await db.user.findUnique({
      where: { email: String(email).trim().toLowerCase() },
    });

    if (!user) {
      res.status(401).json({ error: "Invalid email or password." });
      return;
    }

    if (user.status !== "ACTIVE") {
      res.status(403).json({ error: "Your account is deactivated. Please contact the administrator." });
      return;
    }

    const isMatch = await bcrypt.compare(String(password), user.passwordHash);
    if (!isMatch) {
      res.status(401).json({ error: "Invalid email or password." });
      return;
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("[POST /api/auth/admin-login] error:", error);
    res.status(500).json({ error: "An unexpected error occurred during login." });
  }
});

// Current user profile check
adminRouter.get("/auth/me", authenticateAdmin, async (req: AuthenticatedRequest, res) => {
  try {
    const user = await db.user.findUnique({
      where: { id: req.user!.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        status: true,
        createdAt: true,
      },
    });

    if (!user || user.status !== "ACTIVE") {
      res.status(401).json({ error: "User session is invalid." });
      return;
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error("[GET /api/auth/me] error:", error);
    res.status(500).json({ error: "Failed to fetch user session." });
  }
});

// -------------------------------------------------------------
// Protected Admin Dashboard Stats
// -------------------------------------------------------------

adminRouter.get("/admin/stats", authenticateAdmin, async (_req, res) => {
  try {
    const [
      totalInquiries,
      pendingInquiries,
      admittedInquiries,
      totalContacts,
      unreadContacts,
      totalUsers,
      recentInquiries,
      recentContacts,
      allInquiriesForCourseStats,
    ] = await Promise.all([
      db.inquiry.count(),
      db.inquiry.count({ where: { status: "PENDING" } }),
      db.inquiry.count({ where: { status: "ADMITTED" } }),
      db.contactMessage.count(),
      db.contactMessage.count({ where: { status: "UNREAD" } }),
      db.user.count(),
      db.inquiry.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
      }),
      db.contactMessage.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
      }),
      db.inquiry.groupBy({
        by: ["preferredCourse"],
        _count: { preferredCourse: true },
      }),
    ]);

    res.json({
      success: true,
      stats: {
        totalInquiries,
        pendingInquiries,
        admittedInquiries,
        totalContacts,
        unreadContacts,
        totalUsers,
        recentInquiries,
        recentContacts,
        courseDistribution: allInquiriesForCourseStats.map((item) => ({
          course: item.preferredCourse,
          count: item._count.preferredCourse,
        })),
      },
    });
  } catch (error) {
    console.error("[GET /api/admin/stats] error:", error);
    res.status(500).json({ error: "Failed to load dashboard statistics." });
  }
});

// -------------------------------------------------------------
// Protected Inquiries Management
// -------------------------------------------------------------

// List inquiries with filtering, search, and pagination
adminRouter.get("/admin/inquiries", authenticateAdmin, async (req, res) => {
  try {
    const search = String(req.query.search ?? "").trim();
    const status = String(req.query.status ?? "").trim();
    const course = String(req.query.course ?? "").trim();
    const page = Math.max(1, parseInt(String(req.query.page ?? "1"), 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(String(req.query.limit ?? "50"), 10) || 50));
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};

    if (status && status !== "ALL") {
      where.status = status;
    }

    if (course && course !== "ALL") {
      where.preferredCourse = { contains: course, mode: "insensitive" };
    }

    if (search) {
      where.OR = [
        { applicantName: { contains: search, mode: "insensitive" } },
        { applicantEmail: { contains: search, mode: "insensitive" } },
        { applicantPhone: { contains: search, mode: "insensitive" } },
        { preferredCourse: { contains: search, mode: "insensitive" } },
      ];
    }

    const [inquiries, total] = await Promise.all([
      db.inquiry.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      db.inquiry.count({ where }),
    ]);

    res.json({
      success: true,
      inquiries,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      },
    });
  } catch (error) {
    console.error("[GET /api/admin/inquiries] error:", error);
    res.status(500).json({ error: "Failed to retrieve inquiries." });
  }
});

// Update inquiry status and notes
adminRouter.patch("/admin/inquiries/:id", authenticateAdmin, async (req, res) => {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid inquiry ID." });
    return;
  }

  const { status, notes } = req.body ?? {};

  try {
    const updated = await db.inquiry.update({
      where: { id },
      data: {
        ...(status ? { status: String(status).trim() } : {}),
        ...(notes !== undefined ? { notes: notes ? String(notes).trim() : null } : {}),
      },
    });

    res.json({ success: true, inquiry: updated });
  } catch (error) {
    console.error("[PATCH /api/admin/inquiries/:id] error:", error);
    res.status(500).json({ error: "Failed to update inquiry." });
  }
});

// Delete inquiry
adminRouter.delete("/admin/inquiries/:id", authenticateAdmin, async (req, res) => {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid inquiry ID." });
    return;
  }

  try {
    await db.inquiry.delete({ where: { id } });
    res.json({ success: true, message: "Inquiry deleted successfully." });
  } catch (error) {
    console.error("[DELETE /api/admin/inquiries/:id] error:", error);
    res.status(500).json({ error: "Failed to delete inquiry." });
  }
});

// -------------------------------------------------------------
// Protected Contact Messages Management
// -------------------------------------------------------------

// List contact messages with search & filtering
adminRouter.get("/admin/contacts", authenticateAdmin, async (req, res) => {
  try {
    const search = String(req.query.search ?? "").trim();
    const status = String(req.query.status ?? "").trim();
    const page = Math.max(1, parseInt(String(req.query.page ?? "1"), 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(String(req.query.limit ?? "50"), 10) || 50));
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};

    if (status && status !== "ALL") {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { message: { contains: search, mode: "insensitive" } },
      ];
    }

    const [messages, total] = await Promise.all([
      db.contactMessage.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      db.contactMessage.count({ where }),
    ]);

    res.json({
      success: true,
      messages,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      },
    });
  } catch (error) {
    console.error("[GET /api/admin/contacts] error:", error);
    res.status(500).json({ error: "Failed to retrieve contact messages." });
  }
});

// Update contact message status & notes
adminRouter.patch("/admin/contacts/:id", authenticateAdmin, async (req, res) => {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid message ID." });
    return;
  }

  const { status, notes } = req.body ?? {};

  try {
    const updated = await db.contactMessage.update({
      where: { id },
      data: {
        ...(status ? { status: String(status).trim() } : {}),
        ...(notes !== undefined ? { notes: notes ? String(notes).trim() : null } : {}),
      },
    });

    res.json({ success: true, message: updated });
  } catch (error) {
    console.error("[PATCH /api/admin/contacts/:id] error:", error);
    res.status(500).json({ error: "Failed to update contact message." });
  }
});

// Delete contact message
adminRouter.delete("/admin/contacts/:id", authenticateAdmin, async (req, res) => {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid message ID." });
    return;
  }

  try {
    await db.contactMessage.delete({ where: { id } });
    res.json({ success: true, message: "Contact message deleted successfully." });
  } catch (error) {
    console.error("[DELETE /api/admin/contacts/:id] error:", error);
    res.status(500).json({ error: "Failed to delete contact message." });
  }
});

// -------------------------------------------------------------
// Protected User Management
// -------------------------------------------------------------

// List all users
adminRouter.get("/admin/users", authenticateAdmin, async (_req, res) => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: "asc" },
    });

    res.json({ success: true, users });
  } catch (error) {
    console.error("[GET /api/admin/users] error:", error);
    res.status(500).json({ error: "Failed to retrieve user accounts." });
  }
});

// Create new user
adminRouter.post("/admin/users", authenticateAdmin, async (req, res) => {
  const { name, email, password, role, phone, status } = req.body ?? {};

  if (!name || !email || !password) {
    res.status(400).json({ error: "Name, email, and password are required." });
    return;
  }

  if (String(password).length < 6) {
    res.status(400).json({ error: "Password must be at least 6 characters." });
    return;
  }

  try {
    const normalizedEmail = String(email).trim().toLowerCase();
    const existing = await db.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      res.status(409).json({ error: "A user with this email address already exists." });
      return;
    }

    const passwordHash = await bcrypt.hash(String(password), 10);
    const user = await db.user.create({
      data: {
        name: String(name).trim(),
        email: normalizedEmail,
        passwordHash,
        role: role ? String(role).trim().toUpperCase() : "STAFF",
        phone: phone ? String(phone).trim() : null,
        status: status ? String(status).trim().toUpperCase() : "ACTIVE",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        status: true,
        createdAt: true,
      },
    });

    res.json({ success: true, user });
  } catch (error) {
    console.error("[POST /api/admin/users] error:", error);
    res.status(500).json({ error: "Failed to create user." });
  }
});

// Update existing user (role, status, details, or password reset)
adminRouter.patch("/admin/users/:id", authenticateAdmin, async (req: AuthenticatedRequest, res) => {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid user ID." });
    return;
  }

  const { name, email, password, role, phone, status } = req.body ?? {};

  try {
    const updateData: Record<string, unknown> = {};

    if (name) updateData.name = String(name).trim();
    if (email) updateData.email = String(email).trim().toLowerCase();
    if (role) updateData.role = String(role).trim().toUpperCase();
    if (phone !== undefined) updateData.phone = phone ? String(phone).trim() : null;
    if (status) updateData.status = String(status).trim().toUpperCase();
    if (password && String(password).trim().length >= 6) {
      updateData.passwordHash = await bcrypt.hash(String(password).trim(), 10);
    }

    const user = await db.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        status: true,
        updatedAt: true,
      },
    });

    res.json({ success: true, user });
  } catch (error) {
    console.error("[PATCH /api/admin/users/:id] error:", error);
    res.status(500).json({ error: "Failed to update user." });
  }
});

// Delete user account
adminRouter.delete("/admin/users/:id", authenticateAdmin, async (req: AuthenticatedRequest, res) => {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid user ID." });
    return;
  }

  if (req.user?.userId === id) {
    res.status(400).json({ error: "You cannot delete your own active administrator account." });
    return;
  }

  try {
    await db.user.delete({ where: { id } });
    res.json({ success: true, message: "User account deleted successfully." });
  } catch (error) {
    console.error("[DELETE /api/admin/users/:id] error:", error);
    res.status(500).json({ error: "Failed to delete user." });
  }
});
