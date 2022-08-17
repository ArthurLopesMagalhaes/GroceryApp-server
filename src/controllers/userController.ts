import { Request, Response } from "express";

import * as userService from "../services/userService";

export const getFavorites = async (req: Request, res: Response) => {
  const { id } = req.body;

  const favorites = await userService.getFavorites(Number(id));

  if (favorites instanceof Error) {
    return res.status(400).json({ error: favorites.message });
  }

  res.json(favorites);
};

export const getOrderHistory = async (req: Request, res: Response) => {
  const { id } = req.body;

  const history = await userService.getHistory(Number(id));

  if (history instanceof Error) {
    return res.status(400).json({ error: history.message });
  }

  res.json(history);
};
