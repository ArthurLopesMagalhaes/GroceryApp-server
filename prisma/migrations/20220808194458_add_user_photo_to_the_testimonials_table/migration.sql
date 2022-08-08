/*
  Warnings:

  - You are about to drop the column `rate` on the `Testimonials` table. All the data in the column will be lost.
  - Added the required column `rating` to the `Testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_photo` to the `Testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Testimonials" DROP COLUMN "rate",
ADD COLUMN     "rating" REAL NOT NULL,
ADD COLUMN     "user_photo" VARCHAR NOT NULL;
