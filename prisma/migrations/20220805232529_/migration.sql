/*
  Warnings:

  - A unique constraint covering the columns `[id_store]` on the table `Products` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "products_orders_fk";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "products_stores_fk";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "id_order" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_store_key" ON "Products"("id_store");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "products_orders_fk" FOREIGN KEY ("id_order") REFERENCES "Orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "products_stores_fk" FOREIGN KEY ("id_store") REFERENCES "Stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
