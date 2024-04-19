/*
  Warnings:

  - The `items_in_cart` column on the `Cart` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "totalPrice" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "totalPriceAfterDiscount" DECIMAL(65,30) NOT NULL DEFAULT 0,
DROP COLUMN "items_in_cart",
ADD COLUMN     "items_in_cart" JSONB[];
