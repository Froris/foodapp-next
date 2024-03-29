/*
  Warnings:

  - The primary key for the `OrderedDish` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `OrderedDish` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `_OrderedDishToOrdersByUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ordersByUserId` to the `OrderedDish` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_OrderedDishToOrdersByUser" DROP CONSTRAINT "_OrderedDishToOrdersByUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderedDishToOrdersByUser" DROP CONSTRAINT "_OrderedDishToOrdersByUser_B_fkey";

-- AlterTable
ALTER TABLE "OrderedDish" DROP CONSTRAINT "OrderedDish_pkey",
ADD COLUMN     "ordersByUserId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "OrderedDish_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "_OrderedDishToOrdersByUser";

-- AddForeignKey
ALTER TABLE "OrderedDish" ADD CONSTRAINT "OrderedDish_ordersByUserId_fkey" FOREIGN KEY ("ordersByUserId") REFERENCES "OrdersByUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
