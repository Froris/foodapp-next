/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `OrdersHistory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `OrdersHistory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `OrdersHistory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "OrdersByUser_id_idx";

-- DropIndex
DROP INDEX "OrdersHistory_name_phone_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "OrdersHistory_name_key" ON "OrdersHistory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OrdersHistory_email_key" ON "OrdersHistory"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OrdersHistory_phone_key" ON "OrdersHistory"("phone");
