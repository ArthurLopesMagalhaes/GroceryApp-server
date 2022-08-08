import { Request, Response } from "express";

import * as storeService from "../services/storeService";

export const getStores = async (req: Request, res: Response) => {
  const stores = await storeService.findAllStores({ quantity: 1 });
  if (stores instanceof Error) {
    return res.json({ error: stores.message });
  }
  return res.json({ stores });
};

export const getStoreById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const store = await storeService.findStore(Number(id));
  if (store instanceof Error) {
    return res.json({ error: store.message });
  }
  return res.json({ store });
};
export const getTestimonials = async (req: Request, res: Response) => {
  const { store_id } = req.params;
  console.log(store_id);

  const testimonials = await storeService.findTestimonials(Number(store_id));
  if (testimonials instanceof Error) {
    return res.json({ error: testimonials.message });
  }
  return res.json({ testimonials });
};
