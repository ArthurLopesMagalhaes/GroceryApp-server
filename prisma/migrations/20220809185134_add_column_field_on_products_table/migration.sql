/*
  Warnings:

  - You are about to drop the column `id_order` on the `Products` table. All the data in the column will be lost.
  - Added the required column `rating` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "products_orders_fk";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "id_order",
ADD COLUMN     "rating" REAL NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "products_orders_fk" FOREIGN KEY ("id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
