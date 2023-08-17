/*
  Warnings:

  - A unique constraint covering the columns `[name,phone,email]` on the table `OrdersHistory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "OrdersHistory_email_key";

-- DropIndex
DROP INDEX "OrdersHistory_name_key";

-- DropIndex
DROP INDEX "OrdersHistory_phone_key";

-- CreateIndex
CREATE INDEX "OrdersByUser_id_idx" ON "OrdersByUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrdersHistory_name_phone_email_key" ON "OrdersHistory"("name", "phone", "email");
