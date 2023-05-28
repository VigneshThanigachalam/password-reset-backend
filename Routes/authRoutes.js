import express from "express";
import fs from "fs";
import {
  createUser,
  loginUserCtrl,
  forgetPasswordtoken,
  updatepassword,
  resetPassword,
  validateToken,
  logOut
} from "../Controller/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const authRouter = express.Router();
authRouter.post("/login", (req, res)=>{
  console.log("hi")
});
authRouter.post("/register", createUser);
authRouter.put("/password", authMiddleware, updatepassword);
authRouter.post("/forget-password", forgetPasswordtoken);
authRouter.put("/reset-password", resetPassword);
authRouter.post("/validateToken", authMiddleware, validateToken);
authRouter.put("/log-out", authMiddleware, logOut);
