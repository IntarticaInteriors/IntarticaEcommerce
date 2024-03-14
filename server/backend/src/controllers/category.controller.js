const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const createCategory = catchAsync(async (req, res) => {
  const createdcategory = await categoryService.createCategory(req.body);
  console.log(createdcategory);
  res.status(httpStatus.CREATED).send(createdcategory);
});

const getCategories = catchAsync(async (req, res) => {
  const result = await categoryService.getAllCategories();
  res.send(result);
});

const getCategoryById = catchAsync(async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.category_id);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  res.send(category);
});

const updateCategory = catchAsync(async (req, res) => {
  const category = await categoryService.updateCategoryById(req.params.category_id, req.body);
  res.send(category);
});

const deleteCategory = catchAsync(async (req, res) => {
  console.log("deleteCategory cid",req.params.category_id);
  await categoryService.deleteCategoryById(req.params.category_id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
