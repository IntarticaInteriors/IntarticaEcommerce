-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "address" JSONB NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "category_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" JSONB NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Products" (
    "prod_id" SERIAL NOT NULL,
    "categoryid" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "size" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" INTEGER NOT NULL,
    "picture" JSONB NOT NULL,
    "stockAvailable" BIGINT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("prod_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
