/*
  Warnings:

  - You are about to drop the `_FavoritesToProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FavoritesToProducts" DROP CONSTRAINT "_FavoritesToProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_FavoritesToProducts" DROP CONSTRAINT "_FavoritesToProducts_B_fkey";

-- DropTable
DROP TABLE "_FavoritesToProducts";

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
