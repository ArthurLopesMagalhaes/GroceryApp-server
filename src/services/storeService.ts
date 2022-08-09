import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type FindAllStoresProps = {
  quantity: number;
};

export const findAllStores = async ({ quantity = 3 }: FindAllStoresProps) => {
  try {
    const allStores = await prisma.stores.findMany({
      orderBy: { rating: "desc" },
      take: quantity,
    });
    return allStores;
  } catch (error) {
    return new Error("Someting went wrong. Please, try again.");
  }
};

export const findStore = async (id: number) => {
  try {
    const storeRequest = await Promise.all([
      prisma.stores.findUnique({ where: { id } }),
      prisma.products.findMany({ where: { id_store: id }, take: 4 }),
      prisma.testimonials.findMany({ where: { id_store: id }, take: 2 }),
    ]);
    console.log(storeRequest);
    if (!storeRequest) {
      return new Error("Store doesn't exist");
    }
    const store = {
      info: storeRequest[0],
      products: storeRequest[1],
      testimonials: storeRequest[2],
    };

    return store;
  } catch (error) {
    return new Error("Someting went wrong. Please, try again.");
  }
};

export const findTestimonials = async (id: number) => {
  try {
    const testimonials = await prisma.testimonials.findMany({
      where: { id_store: id },
    });

    if (!testimonials) {
      return new Error("Store doesn't exist");
    }

    return testimonials;
  } catch (error) {
    return new Error("Someting went wrong. Please, try again.");
  }
};
export const findProducts = async (id: number) => {
  try {
    const products = await prisma.products.findMany({
      where: { id_store: id },
    });

    if (!products) {
      return new Error("No products in this store yet");
    }

    return products;
  } catch (error) {
    return new Error("Someting went wrong. Please, try again.");
  }
};
