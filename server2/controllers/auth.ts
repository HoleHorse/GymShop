import { Request, Response } from "express";
import * as authService from "../services/auth";

export const Login = (req: Request, res: Response) => {
  res.send(authService.Login());
};

export const Register = (req: Request, res: Response) => {
  res.send(authService.Register());
};

export const Logout = (req: Request, res: Response) => {
  res.send(authService.Logout());
};
