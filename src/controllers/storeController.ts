import { Request, Response } from "express";

import * as storeService from "../services/storeService";

export const getStores = async (req: Request, res: Response) => {
  const stores = await storeService.findAllStores({ quantity: 1 });
  if (stores instanceof Error) {
    return res.json({ error: stores.message });
  }
  return res.json({ stores });
};

export const getStoresById = async (req: Request, res: Response) => {
  const { id } = req.query;

  const store = await storeService.findStore(Number(id));
  if (store instanceof Error) {
    return res.json({ error: store.message });
  }
  return res.json({ store });
};
