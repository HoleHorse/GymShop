import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await authService.Login({ email, password });
  if (result[0] === 200) {
    res.cookie("auth", result[1], { maxAge: 24 * 3600 * 1000 });
  }
  res.status(result[0]).json(result[1]);
};

export const Register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await authService.Register({ email, password });
  res.status(result[0]).json(result[1]);
};

export const Logout = (req: Request, res: Response) => {
  res.send(authService.Logout());
};
