const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const cartService = require('../services/cart.service');

const getCart = catchAsync(async (req, res) => {
  const { cart_id } = req.body;
  const Cart = await cartService.getCart(cart_id);
  console.log(Cart);
  res.status(httpStatus.FOUND).send(Cart);
});

const addToCart = catchAsync(async (req, res) => {
  const { cart_id, prod_id } = req.body;
  const updatedCart = await cartService.addToCart(cart_id, prod_id);
  res.send(updatedCart);
});

const clearCart = catchAsync(async (req, res) => {
  const { cart_id } = req.body;
  const clearedCart = await cartService.clearCart(cart_id);
  console.log(clearedCart);
  res.send(httpStatus.NO_CONTENT);
});

//? After writing coupons code uncomment this and write its service
// const applyCoupon = catchAsync(async (req, res) => {
//   const AppliedCoupon = await cartService.applyCoupon(req.body);
//   console.log(AppliedCoupon);
//   res.status(httpStatus[200]).send(AppliedCoupon);
// });

const updateCartItemQuantity = catchAsync(async (req, res) => {
  const { cart_id, prod_id, quantity } = req.body;
  const updatedCart = await cartService.updateCartItemQuantity(cart_id, prod_id, quantity);
  console.log(updatedCart);
  res.status(200).send(updatedCart);
});
const removeFromCart = catchAsync(async (req, res) => {
  const { cart_id, prod_id } = req.body;
  const updatedCart = await cartService.removeFromCart(cart_id, prod_id);
  console.log(updatedCart);
  res.status(200).send(updatedCart);
});
const addCartFromAnotherProject=catchAsync(async(req,res)=>{
  const {project_id}=req.body;
  const updatedCart=await cartService.AddCartFromProject(project_id);
  console.log(updatedCart);
  res.status(200).send(updatedCart);

})

const getCartTotal=catchAsync(async(req,res)=>{
  const {cart_id}=req.body;
  const CartTotal=getCartTotal(cart_id);
  res.status(200).send(CartTotal);
})

const transferCartProject=catchAsync(async(req,res)=>{
  const {cart_id_from,cart_id_to}=req.body;
  const UpdatedCart=cartService.transferCartProject(cart_id_from,cart_id_to);
  res.status(200).send(UpdatedCart);
})
module.exports = {
  getCart,
  addToCart,
  // applyCoupon
  clearCart,
  removeFromCart,
  updateCartItemQuantity,
getCartTotal,
  transferCartProject,
};
