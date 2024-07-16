-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_project_id_fkey";

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "Cart"("cart_id") ON DELETE SET NULL ON UPDATE CASCADE;
