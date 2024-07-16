/*
  Warnings:

  - A unique constraint covering the columns `[couponsCoupon_id]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Coupons" DROP CONSTRAINT "Coupons_cartCart_id_fkey";

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "couponsCoupon_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_couponsCoupon_id_key" ON "Cart"("couponsCoupon_id");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_couponsCoupon_id_fkey" FOREIGN KEY ("couponsCoupon_id") REFERENCES "Coupons"("coupon_id") ON DELETE SET NULL ON UPDATE CASCADE;
