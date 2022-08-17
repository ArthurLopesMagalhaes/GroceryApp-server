import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getFavorites = async (id: number) => {
  try {
    const userFavorites = await prisma.favorites.findMany({
      where: { id_user: id },
      include: {
        products: {
          select: {
            name: true,
            price: true,
            product_photo: true,
            stores: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return userFavorites;
  } catch (error) {
    return new Error("Someting went wrong. Please, try again.");
  }
};

export const getHistory = async (id: number) => {
  try {
    const userHistory = await prisma.orders.findMany({
      where: { id_user: id },
      include: {
        products: {
          select: {
            name: true,
            product_photo: true,
            stores: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!userHistory) {
      return new Error("User not found");
    }
    return userHistory;
  } catch (error) {
    return new Error("Someting went wrong. Please, try again.");
  }
};
