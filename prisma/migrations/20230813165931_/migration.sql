/*
  Warnings:

  - You are about to drop the column `ordersByUserId` on the `OrderedDish` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderedDish" DROP CONSTRAINT "OrderedDish_ordersByUserId_fkey";

-- AlterTable
ALTER TABLE "OrderedDish" DROP COLUMN "ordersByUserId";

-- CreateTable
CREATE TABLE "_OrderedDishToOrdersByUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrderedDishToOrdersByUser_AB_unique" ON "_OrderedDishToOrdersByUser"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderedDishToOrdersByUser_B_index" ON "_OrderedDishToOrdersByUser"("B");

-- AddForeignKey
ALTER TABLE "_OrderedDishToOrdersByUser" ADD CONSTRAINT "_OrderedDishToOrdersByUser_A_fkey" FOREIGN KEY ("A") REFERENCES "OrderedDish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderedDishToOrdersByUser" ADD CONSTRAINT "_OrderedDishToOrdersByUser_B_fkey" FOREIGN KEY ("B") REFERENCES "OrdersByUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
