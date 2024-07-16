/*
  Warnings:

  - You are about to drop the column `total` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `city` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveredAt` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDelivered` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPaid` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paidAt` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_method` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_address` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalOrderPrice` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "total",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "deliveredAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isDelivered" BOOLEAN NOT NULL,
ADD COLUMN     "isPaid" BOOLEAN NOT NULL,
ADD COLUMN     "paidAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "payment_method" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "shipping_address" TEXT NOT NULL,
ADD COLUMN     "totalOrderPrice" TEXT NOT NULL;
