/*
  Warnings:

  - Made the column `ordersByUserId` on table `OrderedDish` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "OrderedDish" DROP CONSTRAINT "OrderedDish_ordersByUserId_fkey";

-- AlterTable
ALTER TABLE "OrderedDish" ALTER COLUMN "ordersByUserId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderedDish" ADD CONSTRAINT "OrderedDish_ordersByUserId_fkey" FOREIGN KEY ("ordersByUserId") REFERENCES "OrdersByUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
