/*
  Warnings:

  - You are about to drop the column `id_product` on the `Orders` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Orders_id_product_key";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "id_product";
