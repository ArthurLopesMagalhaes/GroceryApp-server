import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";
import multer from "multer";

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

export type singUpProps = {
  email: string;
  password: string;
  full_name: string;
  nickname: string;
  phone_number: string;
  gender: string;
  birth_date: Date;
  avatar: string;
};

export const signUp = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.mapped());
  }

  const data: singUpProps = req.body;

  const file = req.file;

  const newUser = await UserService.createUser(data, file);
  if (newUser instanceof Error) {
    return res.json({ error: newUser.message });
  }

  return res.json({ newUser });
};
