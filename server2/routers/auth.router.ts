import { Router } from "express";
import * as authController from "../controllers/auth.controller"

const router = Router();

router.post("/login", authController.Login);
router.post("/register", authController.Register);
router.post("/logout", authController.Logout);

export default router;
