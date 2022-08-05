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
    const store = await prisma.stores.findUnique({ where: { id } });
    if (!store) {
      return new Error("Store doesn't exist");
    }
    return store;
  } catch (error) {
    return new Error("Someting went wrong. Please, try again.");
  }
};
