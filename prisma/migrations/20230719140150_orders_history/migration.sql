-- CreateTable
CREATE TABLE "OrdersHistory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "OrdersHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrdersByUser" (
    "id" TEXT NOT NULL,
    "totalOrderPrice" DECIMAL(65,30) NOT NULL,
    "ordersHistoryId" TEXT NOT NULL,

    CONSTRAINT "OrdersByUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderedDish" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "totalOrderPrice" DECIMAL(65,30) NOT NULL,
    "ordersByUserId" TEXT,

    CONSTRAINT "OrderedDish_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrdersHistory_name_key" ON "OrdersHistory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OrdersHistory_email_key" ON "OrdersHistory"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OrdersHistory_phone_key" ON "OrdersHistory"("phone");

-- CreateIndex
CREATE INDEX "OrdersHistory_name_email_idx" ON "OrdersHistory"("name", "email");

-- CreateIndex
CREATE INDEX "Restaurant_name_idx" ON "Restaurant"("name");

-- AddForeignKey
ALTER TABLE "OrdersByUser" ADD CONSTRAINT "OrdersByUser_ordersHistoryId_fkey" FOREIGN KEY ("ordersHistoryId") REFERENCES "OrdersHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedDish" ADD CONSTRAINT "OrderedDish_ordersByUserId_fkey" FOREIGN KEY ("ordersByUserId") REFERENCES "OrdersByUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
