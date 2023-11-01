import { Router } from "express";

export const userRoute = Router();

userRoute.get("/", (req, res) => {
  res.json({ message: "Users are here!" });
});
