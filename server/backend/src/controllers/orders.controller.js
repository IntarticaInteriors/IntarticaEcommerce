const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { ordersService } = require('../services');

const checkoutSession = catchAsync(async (req, res) => {});

const createCashOrder = catchAsync(async (req, res) => {});
const getAllOrders = catchAsync(async (req, res) => {});
const filterUsersOrders = catchAsync(async (req, res) => {});
const getSingleOrder = catchAsync(async (req, res) => {});
const updateSingleOrder = catchAsync(async (req, res) => {});
const deleteSingleOrder = catchAsync(async (req, res) => {});

const updateOrderToPaid = catchAsync((req, res) => {});

const updateOrderToDelivered = catchAsync((req, res) => {});

module.exports = {
  checkoutSession,
  createCashOrder,
  getAllOrders,
  filterUsersOrders,
  getSingleOrder,
  updateSingleOrder,
  deleteSingleOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
};
