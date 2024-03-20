/*
  Warnings:

  - Made the column `picture` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "images" TEXT[],
ALTER COLUMN "picture" SET NOT NULL,
ALTER COLUMN "picture" SET DATA TYPE TEXT;
