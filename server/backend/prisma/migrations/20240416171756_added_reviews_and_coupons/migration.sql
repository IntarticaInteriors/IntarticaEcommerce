-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profilePicture" TEXT;

-- CreateTable
CREATE TABLE "Reviews" (
    "review_id" TEXT NOT NULL,
    "reviewText" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userUser_id" TEXT,
    "productsProd_id" TEXT,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "Coupons" (
    "coupon_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cartCart_id" TEXT,
    "expire" TIMESTAMP(3) NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Coupons_pkey" PRIMARY KEY ("coupon_id")
);

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_userUser_id_fkey" FOREIGN KEY ("userUser_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_productsProd_id_fkey" FOREIGN KEY ("productsProd_id") REFERENCES "Products"("prod_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupons" ADD CONSTRAINT "Coupons_cartCart_id_fkey" FOREIGN KEY ("cartCart_id") REFERENCES "Cart"("cart_id") ON DELETE SET NULL ON UPDATE CASCADE;
