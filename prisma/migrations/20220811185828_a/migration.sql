/*
  Warnings:

  - A unique constraint covering the columns `[id_product]` on the table `Favorites` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Favorites_id_product_key" ON "Favorites"("id_product");
