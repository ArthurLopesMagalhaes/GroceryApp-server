/*
  Warnings:

  - You are about to drop the column `date_birth` on the `Users` table. All the data in the column will be lost.
  - Added the required column `birth_date` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "date_birth",
ADD COLUMN     "birth_date" DATE NOT NULL;
