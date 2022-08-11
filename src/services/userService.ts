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
