/*
  Warnings:

  - Added the required column `id_store` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "testimonials" ADD COLUMN     "id_store" INTEGER NOT NULL,
ADD COLUMN     "id_user" INTEGER NOT NULL,
ADD COLUMN     "rate" REAL NOT NULL;
