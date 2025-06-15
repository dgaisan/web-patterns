import jwt from "jsonwebtoken";

export const JWT_SECRET = "super-secret"; // TODO: read from env

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "15m" });
}
