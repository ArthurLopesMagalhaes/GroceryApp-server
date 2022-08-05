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
    ]);
    if (!storeRequest) {
      return new Error("Store doesn't exist");
    }
    const store = {
      info: storeRequest[0],
      products: storeRequest[1],
    };

    return store;
  } catch (error) {
    return new Error("Someting went wrong. Please, try again.");
  }
};
