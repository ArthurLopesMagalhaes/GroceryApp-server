/*
  Warnings:

  - Added the required column `id_store` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "id_store" INTEGER NOT NULL;
