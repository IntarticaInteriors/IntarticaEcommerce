-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "project_id" TEXT NOT NULL,
    "proj_user_id" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "client_name" TEXT,
    "cartCart_id" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cart_id" TEXT NOT NULL,
    "items_in_cart" JSONB NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cart_id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "order_id" TEXT NOT NULL,
    "order_user_id" TEXT,
    "cart_items" JSONB NOT NULL,
    "total" JSONB NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Projects_cartCart_id_key" ON "Projects"("cartCart_id");

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_proj_user_id_fkey" FOREIGN KEY ("proj_user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_cartCart_id_fkey" FOREIGN KEY ("cartCart_id") REFERENCES "Cart"("cart_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_order_user_id_fkey" FOREIGN KEY ("order_user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
