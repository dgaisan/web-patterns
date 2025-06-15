import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Alive and kicking!");
});

export default userRouter;
