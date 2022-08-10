import { Request, Response } from "express";

import * as userService from "../services/userService";

export const getFavorites = async (req: Request, res: Response) => {
  const favorites = await userService.getFavorites();

  if (favorites instanceof Error) {
    res.status(400).json({ error: favorites.message });
  }

  res.json(favorites);
};
