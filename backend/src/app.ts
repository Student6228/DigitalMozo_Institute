import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { loginSchema } from "./schemas/auth.js";

export function createApp() {
  const app = express();

  app.disable("x-powered-by");
  app.use(helmet());
  app.use(
    cors({
      origin: process.env.WEB_ORIGIN ?? "http://localhost:5173",
      credentials: true,
    }),
  );
  app.use(express.json({ limit: "1mb" }));
  app.use(
    "/api",
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 300,
      standardHeaders: "draft-8",
      legacyHeaders: false,
    }),
  );

  app.get("/api/health", (_request, response) => {
    response.json({
      status: "ok",
      service: "school-management-api",
      timestamp: new Date().toISOString(),
    });
  });

  app.post("/api/inquiry", (request, response) => {
    const { applicantName, applicantEmail, applicantPhone, preferredCourse, message } =
      request.body ?? {};
    if (!applicantName || !applicantEmail || !applicantPhone || !preferredCourse) {
      response.status(400).json({ error: "Missing required inquiry fields" });
      return;
    }
    response.json({
      success: true,
      message: "Inquiry received successfully. Our admissions team will contact you shortly.",
      data: { applicantName, preferredCourse, message: message || null },
    });
  });

  app.post("/api/contact", (request, response) => {
    const { name, email, message } = request.body ?? {};
    if (!name || !email || !message) {
      response.status(400).json({ error: "Missing required contact fields" });
      return;
    }
    response.json({
      success: true,
      message: "Message received successfully. Thank you for contacting DigitalMozo Institute.",
    });
  });

  app.post("/api/auth/login", (request, response) => {
    const parseResult = loginSchema.safeParse(request.body);
    if (!parseResult.success) {
      response
        .status(400)
        .json({ error: "Invalid login credentials format", details: parseResult.error.flatten() });
      return;
    }
    response.json({
      success: true,
      message: "Authentication successful",
      user: {
        identifier: parseResult.data.identifier,
        role: parseResult.data.identifier.includes("@") ? "teacher" : "student",
      },
    });
  });

  return app;
}
