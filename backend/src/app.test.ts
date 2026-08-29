import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "./app.js";

describe("School Management & Admin Portal API", () => {
  const app = createApp();

  it("should respond to health check", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body.service).toBe("school-management-api");
  });

  it("should reject unauthenticated admin requests", async () => {
    const res = await request(app).get("/api/admin/stats");
    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });

  it("should log in with default admin credentials", async () => {
    const res = await request(app).post("/api/auth/admin-login").send({
      email: "faizur544@gmail.com",
      password: "Faizur@7035",
    });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    expect(res.body.user).toBeDefined();
    expect(res.body.user.role).toBe("ADMIN");

    // Test access to stats with valid token
    const statsRes = await request(app)
      .get("/api/admin/stats")
      .set("Authorization", `Bearer ${res.body.token}`);

    expect(statsRes.status).toBe(200);
    expect(statsRes.body.success).toBe(true);
    expect(statsRes.body.stats).toBeDefined();
    expect(typeof statsRes.body.stats.totalInquiries).toBe("number");
  });

  it("should reject invalid login credentials", async () => {
    const res = await request(app).post("/api/auth/admin-login").send({
      email: "faizur544@gmail.com",
      password: "WrongPassword123!",
    });

    expect(res.status).toBe(401);
    expect(res.body.error).toBe("Invalid email or password.");
  });
});
