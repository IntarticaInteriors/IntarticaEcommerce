// const express = require('express');
// const router = express.Router();
// const {
//   getMyCart,
//   addToCart,
//   removeFromCart,
//   updateCartItemQuantity,
//   clearCart,
//   applyCoupon,
// } = require('../../controllers/cart.controller');
// const {
//   addToCartValidator,
//   removeFromCartValidator,
//   updateCartItemQuantityValidator,
//   applyCouponValidator,
// } = require('../../validations/cart.validation.js');

// router.route('/').get(getMyCart).post(addToCartValidator, addToCart).delete(clearCart);

// router.route('/apply-coupon').patch(applyCouponValidator, applyCoupon);

// router
//   .route('/:productId')
//   .patch(updateCartItemQuantityValidator, updateCartItemQuantity)
//   .delete(removeFromCartValidator, removeFromCart);

// export default router;
