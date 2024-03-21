const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.route('/create-product').post(
  // auth('manageProducts'),
  validate(productValidation.createProduct),
  // upload.array('image'),
  productController.createProduct
);

router.route('/get-product').get(productController.getProducts);

router
  .route('/get-product/:prod_id')
  .get(auth('getProducts'), validate(productValidation.getProductById), productController.getProductById);

router
  .route('/update-product/:prod_id')
  .patch(auth('manageProducts'), validate(productValidation.updateProduct), productController.updateProduct);

router
  .route('/delete-product/:prod_id')
  .delete(auth('manageProducts'), validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;
