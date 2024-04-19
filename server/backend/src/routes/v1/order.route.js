const express = require('express');
const router = express.Router();
const ordersController = require('../../controllers/orders.controller');
// user routes (auth(user-orders))
router.route('/checkout-session').post(ordersController.checkoutSession);
router.route('/create-cash-order/:cart-id').post(ordersController.createCashOrder);
router.route('/get-all-orders').get(ordersController.getAllOrders);
router.route('/filter-users-orders').get(ordersController.filterUsersOrders);
router.route('/get-single-order').get(ordersController.getSingleOrder);

// admin routes auth(admin-orders)
router.route('/update-single-order/:order_id').patch(ordersController.updateSingleOrder);
router.route('/delete-single-order').delete(ordersController.deleteSingleOrder);

router.route('/:order_id/is-paid').patch(ordersController.updateOrderToPaid);
router.route('/:order_id/is-delivered').patch(ordersController.updateOrderToDelivered);

module.exports=router;