/*
  Warnings:

  - You are about to drop the column `cartCart_id` on the `Projects` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[project_id]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cart_id]` on the table `Projects` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_cartCart_id_fkey";

-- DropIndex
DROP INDEX "Projects_cartCart_id_key";

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "project_id" TEXT;

-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "cartCart_id",
ADD COLUMN     "cart_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_project_id_key" ON "Cart"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_cart_id_key" ON "Projects"("cart_id");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("project_id") ON DELETE SET NULL ON UPDATE CASCADE;
