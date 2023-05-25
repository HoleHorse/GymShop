import { Router, Request, Response } from "express";
import * as authController from "../controllers/auth"

const router = Router();

router.post("/login", authController.Login);
router.post("/register", authController.Register);
router.post("/logout", authController.Logout);

export default router;
