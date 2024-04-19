const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CalculateTotalPrice = async (cart_id) => {
  const cart = await prisma.cart.findFirst({
    where:{
        cart_id:cart_id
    }
  });

  let TotalPrice = 0 || cart.totalPrice;
  let TotalPriceAfterDiscount = 0 || cart.totalPriceAfterDiscount;
  if (cart.items_in_cart) {
    cart.items_in_cart.forEach((item) => {
      TotalPrice = item.price * item.quantity;
    });
  }
  cart.totalPrice = TotalPrice;
  cart.totalPriceAfterDiscount=TotalPriceAfterDiscount;
};

module.exports={CalculateTotalPrice};