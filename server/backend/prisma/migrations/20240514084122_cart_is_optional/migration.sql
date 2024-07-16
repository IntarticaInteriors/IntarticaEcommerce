-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_cartCart_id_fkey";

-- AlterTable
ALTER TABLE "Projects" ALTER COLUMN "cartCart_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_cartCart_id_fkey" FOREIGN KEY ("cartCart_id") REFERENCES "Cart"("cart_id") ON DELETE SET NULL ON UPDATE CASCADE;
