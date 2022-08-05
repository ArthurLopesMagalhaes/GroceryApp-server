-- DropForeignKey
ALTER TABLE "Addresses" DROP CONSTRAINT "Addresses_id_store_fkey";

-- DropForeignKey
ALTER TABLE "Addresses" DROP CONSTRAINT "Addresses_id_user_fkey";

-- AlterTable
ALTER TABLE "Addresses" ALTER COLUMN "id_user" DROP NOT NULL,
ALTER COLUMN "id_store" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Addresses" ADD CONSTRAINT "Addresses_id_store_fkey" FOREIGN KEY ("id_store") REFERENCES "Stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Addresses" ADD CONSTRAINT "Addresses_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
