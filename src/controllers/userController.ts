import { Request, Response } from "express";
import { validationResult } from "express-validator";

import * as UserService from "../services/userService";

export const ping = async (req: Request, res: Response) => {
  return res.json({ pong: true });
};

export const signIn = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.mapped());
  }

  const { email, password } = req.body;
  const user = await UserService.loginUser(email, password);

  if (user instanceof Error) {
    return res.json({ error: user.message });
  }

  return res.json({ user });
};
