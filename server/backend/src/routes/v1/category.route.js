const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router.route('/create-category').post(
  // auth('manageCategories'),
  validate(categoryValidation.createCategory), categoryController.createCategory);

router.route('/get-category').get(
  // auth('getCategories'),
   categoryController.getCategories);

router
  .route('/get-category/:category_id')
  .get(auth('getCategories'), validate(categoryValidation.getCategoryById), categoryController.getCategoryById);

router
  .route('/update-category/:category_id')
  .patch(auth('manageCategories'), validate(categoryValidation.updateCategory), categoryController.updateCategory);

  router
  .route('/delete-category/:category_id')
  .delete(validate(categoryValidation.deleteCategory), categoryController.deleteCategory);

module.exports = router;
