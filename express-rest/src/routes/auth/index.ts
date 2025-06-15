import express, { Request, Response } from "express";
import { DummyDB } from "../../db";
import { generateToken } from "../../utils/auth";

const authRouter = express.Router();

authRouter.post("/login", (req: any, res: any) => {
  try {
    if (!req.body || !req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  const { email, password } = req.body;

  console.log("email", email, "password", password);

  const user = DummyDB.users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(user.id);
  return res.json({ accessToken: token });
});

export default authRouter;
