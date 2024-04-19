const { PrismaClient } = require('@prisma/client');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const prisma = new PrismaClient();

const { CalculateTotalPrice } = require('../utils/cartTotal');

//
//items in cart json will have the following keys
// prod_id
// product Name
// quantity
// price
// size
// color
// brand
//
const getCart = async (cart_id) => {
  const Cart = await prisma.cart.findFirst({
    where: {
      cart_id: cart_id,
    },
  });
  //   console.log(Cart);
  return Cart;
};

const addToCart = async (cart_id, prod_id) => {
  // Find the cart
  const cart = await prisma.cart.findFirst({
    where: {
      cart_id: cart_id,
    },
    include: {
      Projects: true,
    },
  });

  if (!cart) {
    throw new Error('Cart not found');
  }

  // Check if the product exists
  const productTobeAdded = await prisma.products.findFirst({
    where: {
      prod_id: prod_id,
    },
  });

  if (!productTobeAdded) {
    throw new Error('Product not found');
  }

  // Check if the product is available in stock
  if (productTobeAdded.stockAvailable <= 0) {
    throw new Error('Product is out of stock');
  }

  // Check if the product is already in the cart
  const existingItemIndex = cart.items_in_cart.findIndex((item) => item.prod_id === prod_id);

  if (existingItemIndex !== -1) {
    throw new Error('Product is already in the cart');
  }
  // if it does not exits
  const updatedItems = [
    ...cart.items_in_cart,
    {
      prod_id: productTobeAdded.prod_id,
      productName: productTobeAdded.name,
      quantity: 1, // Adding only one quantity
      price: productTobeAdded.price,
      size: productTobeAdded.size,
      color: productTobeAdded.color,
      brand: productTobeAdded.brand,
      // Add other necessary properties here
    },
  ];

  // Update the cart with the updated items_in_cart array
  const updatedCart = await prisma.cart.update({
    where: {
      cart_id: cart_id,
    },
    data: {
      items_in_cart: updatedItems,
    },
  });

  return updatedCart;
};

const clearCart = async (cart_id) => {
  const cleared_items_in_cart = {};
  const cart = await prisma.cart.update({
    where: {
      cart_id: cart_id,
    },
    data: {
      items_in_cart: cleared_items_in_cart,
    },
  });
  return cart;
};

const updateCartItemQuantity = async (cart_id, prod_id, quantity) => {
  const cart = await prisma.cart.findUnique({
    where: {
      cart_id: cart_id,
    },
  });
  if (!cart) {
    throw new Error('Cart not found');
  }
  // Find the index of the item in the items_in_cart array
  const itemIndex = cart.items_in_cart.findIndex((item) => item.prod_id === prod_id);
  if (itemIndex === -1) {
    // Item not found in cart
    throw new Error('Item not found in cart');
  }
  // Update the quantity of the item
  cart.items_in_cart[itemIndex].quantity = quantity;

  // Update the cart with the modified items_in_cart
  const updatedCart = await prisma.cart.update({
    where: {
      cart_id: cart_id,
    },
    data: {
      items_in_cart: cart.items_in_cart,
    },
  });
  // Recalculate totalPrice and totalPriceAfterDiscount if needed
  // You might need to update totalPrice and totalPriceAfterDiscount here
  let totalPrice = await CalculateTotalPrice(cart_id);
  const updatedCart2 = await prisma.cart.update({
    where: {
      cart_id: cart_id,
    },
    data: {
      totalPrice: totalPrice,
    },
  });

  return updatedCart2;
};
const removeFromCart = async (cart_id, prod_id) => {
  // Retrieve the cart
  const cart = await prisma.cart.findUnique({
    where: {
      cart_id: cart_id,
    },
  });

  if (!cart) {
    // Cart not found
    throw new Error('Cart not found');
  }

  // Find the index of the item in the items_in_cart array
  const itemIndex = cart.items_in_cart.findIndex((item) => item.prod_id === prod_id);

  if (itemIndex === -1) {
    // Item not found in cart
    throw new Error('Item not found in cart');
  }

  // Remove the item from the items_in_cart array
  cart.items_in_cart.splice(itemIndex, 1);

  // Update the cart with the modified items_in_cart
  const updatedCart = await prisma.cart.update({
    where: {
      cart_id: cart_id,
    },
    data: {
      items_in_cart: cart.items_in_cart,
      // You might need to update totalPrice and totalPriceAfterDiscount here
    },
  });
  // Recalculate totalPrice and totalPriceAfterDiscount if needed
  let totalPrice = await CalculateTotalPrice(cart_id);
  const updatedCart2 = await prisma.cart.update({
    where: {
      cart_id: cart_id,
    },
    data: {
      totalPrice: totalPrice,
    },
  });

  return updatedCart2;
};

const getCartTotal = async (cart_id) => {
  const TotalPrice = await CalculateTotalPrice(cart_id);
  return TotalPrice;
};

const 
transferCartProject = async (cart_id_from, cart_id_to) => {
  const cartContainingItems = await prisma.cart.get({
    where: {
      cart_id: cart_id_from,
    },
  });
  const newItemsTobeAdded = cartContainingItems.items_in_cart; // this json contains all the items we want to transfer
  const cartWhereTransferring = await prisma.cart.get({
    where: {
      cart_id: cart_id_to,
    },
  });
  const newItemsTobeUpdated = { ...cartWhereTransferring.items_in_cart, newItemsTobeAdded };

  const UpdatedCart = await prisma.cart.update({
    where: {
      cart_id: cart_id_to,
    },
    data: {
      items_in_cart: newItemsTobeUpdated,
    },
  });

  return UpdatedCart;
};

module.exports = {
  addToCart,
  clearCart,
  getCart,
  updateCartItemQuantity,
  removeFromCart,
  getCartTotal,
  transferCartProject
};
