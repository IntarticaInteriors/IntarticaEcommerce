// const httpStatus = require('http-status');
// const pick = require('../utils/pick');
// const ApiError = require('../utils/ApiError');
// const catchAsync = require('../utils/catchAsync');
// const { ordersService } = require('../services');
// const Stripe = require('stripe');
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const dotenv = require('dotenv');
// dotenv.config();

// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: 'Learn React Today' }],
//   [2, { priceInCents: 20000, name: 'Learn CSS Today' }],
// ]);

// //two ways of creating order or populating orders table
// const checkoutSession = catchAsync(async (req, res) => {
//   const { user_id } = req.body;
//   const createdCheckoutSession = await ordersService.checkoutSession(user_id);
//   return createdCheckoutSession;
// });

// const createCashOrder = catchAsync(async (req, res) => {
//   const { user_id } = req.body;
//   const createdCashOrder = await ordersService.createCashOrder();
//   return createdCashOrder;
// });

// //for admin only
// const filterUsersOrders = catchAsync(async (req, res) => {
//   const { user } = req.body;
//   const filteredUserOrders = await ordersService.filterUsersOrders(user);
//   return filterUsersOrders;
// });

// //for CRUD orders for users as well as admins
// const getAllOrders = catchAsync(async (req, res) => {
//   const allOrders = await ordersService.getAllOrders();
//   return allOrders;
// });
// const getSingleOrder = catchAsync(async (req, res) => {
//   const { order_id } = req.body;
//   const order = await ordersService.getSingleOrder(order_id);
//   return order;
// });
// const updateSingleOrder = catchAsync(async (req, res) => {
//   const { order_id } = req.body;
//   const updatedOrder = await ordersService.updateSingleOrder(order_id);
//   return updatedOrder;
// });
// const deleteSingleOrder = catchAsync(async (req, res) => {
//   const { order_id } = req.body;
//   const deletedOrder = await ordersService.deleteSingleOrder(order_id);
//   return deletedOrder;
// });

// // for cash payments -> orders
// const updateOrderToPaid = catchAsync(async (req, res) => {
//   const { order_id } = req.body;
//   const updatedOrder = await ordersService.updateOrderToPaid(order_id);
//   return updatedOrder;
// });

// const updateOrderToDelivered = catchAsync(async (req, res) => {
//   const { order_id } = req.body;
//   const updatedOrder = await ordersService.updateOrderToDelivered(order_id);
//   return updatedOrder;
// });

// module.exports = {
//   checkoutSession,
//   createCashOrder,
//   getAllOrders,
//   filterUsersOrders,
//   getSingleOrder,
//   updateSingleOrder,
//   deleteSingleOrder,
//   updateOrderToPaid,
//   updateOrderToDelivered,
// };
