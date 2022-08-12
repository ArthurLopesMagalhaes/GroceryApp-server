import { Request, Response } from "express";

import * as storeService from "../services/storeService";

export const getStores = async (req: Request, res: Response) => {
  const stores = await storeService.findAllStores({ quantity: 3 });
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
export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await storeService.findProduct(Number(id));
  if (product instanceof Error) {
    return res.json({ error: product.message });
  }
  return res.json({ product });
};

export const getTestimonials = async (req: Request, res: Response) => {
  const { store_id } = req.params;
  const { quantity } = req.query;

  const testimonials = await storeService.findTestimonials(
    Number(store_id),
    Number(quantity)
  );
  if (testimonials instanceof Error) {
    return res.json({ error: testimonials.message });
  }
  return res.json({ testimonials });
};

export const getProducts = async (req: Request, res: Response) => {
  const { store_id } = req.params;

  const products = await storeService.findProducts(Number(store_id));
  if (products instanceof Error) {
    return res.json({ error: products.message });
  }

  return res.json({ products });
};
