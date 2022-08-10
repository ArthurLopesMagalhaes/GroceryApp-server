import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getFavorites = async () => {
  try {
    const userFavorites = await prisma.stores.findMany({
      orderBy: { rating: "desc" },
    });
    return userFavorites;
  } catch (error) {
    return new Error("Someting went wrong. Please, try again.");
  }
};
