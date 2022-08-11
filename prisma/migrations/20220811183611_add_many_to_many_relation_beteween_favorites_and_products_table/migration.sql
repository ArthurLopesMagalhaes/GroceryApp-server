-- CreateTable
CREATE TABLE "_FavoritesToProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavoritesToProducts_AB_unique" ON "_FavoritesToProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoritesToProducts_B_index" ON "_FavoritesToProducts"("B");

-- AddForeignKey
ALTER TABLE "_FavoritesToProducts" ADD CONSTRAINT "_FavoritesToProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Favorites"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoritesToProducts" ADD CONSTRAINT "_FavoritesToProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
