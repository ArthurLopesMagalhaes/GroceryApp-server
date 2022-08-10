/*
  Warnings:

  - You are about to drop the column `user_photo` on the `Testimonials` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Testimonials" DROP COLUMN "user_photo",
ADD COLUMN     "comment" VARCHAR NOT NULL,
ADD COLUMN     "date" DATE NOT NULL;
