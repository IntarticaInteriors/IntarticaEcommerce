/*
  Warnings:

  - You are about to drop the column `couponsCoupon_id` on the `Cart` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_couponsCoupon_id_fkey";

-- DropIndex
DROP INDEX "Cart_couponsCoupon_id_key";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "couponsCoupon_id";
