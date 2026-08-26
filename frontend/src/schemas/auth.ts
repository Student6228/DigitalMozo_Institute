import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().trim().min(1, "An ID or email address is required."),
  password: z.string().min(8, "Password must contain at least 8 characters."),
  rememberMe: z.boolean().default(false),
});

export type LoginInput = z.infer<typeof loginSchema>;
