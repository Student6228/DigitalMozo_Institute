import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface AuthUserPayload {
  userId: number;
  email: string;
  name: string;
  role: string;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthUserPayload;
}

const JWT_SECRET = process.env.JWT_SECRET ?? "digitalmozo-institute-jwt-secret-2024-change-in-prod";

export function authenticateAdmin(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Access denied. Authentication token required." });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthUserPayload;
    req.user = decoded;
    next();
  } catch (_err) {
    res.status(401).json({ error: "Invalid or expired session. Please log in again." });
  }
}
