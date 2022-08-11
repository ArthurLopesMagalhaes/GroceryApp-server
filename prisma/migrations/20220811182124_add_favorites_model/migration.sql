-- CreateTable
CREATE TABLE "Favorites" (
    "id" SERIAL NOT NULL,
    "id_product" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
