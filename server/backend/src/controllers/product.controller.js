const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');
const config = require('../config/config');

const createProduct = catchAsync(async (req, res) => {
  console.log("req.headers",req.headers);
  console.log('req.files', req.files);
  console.log('req.body', req.body);

  // console.log(req.body);

  const createdProduct = await productService.createProduct(req.body, req.files);
  // console.log(createdProduct);
  // res.status(httpStatus.CREATED).send(createdProduct);
  res.send(req.files);
});

const getProducts = catchAsync(async (req, res) => {
  const result = await productService.getAllProducts();
  res.send(result);
});

const getProductById = catchAsync(async (req, res) => {
  const product = await productService.getProductById(req.params.prod_id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(product);
});

const updateProduct = catchAsync(async (req, res) => {
  const product = await productService.updateProductById(req.params.prod_id, req.body);
  res.send(product);
});

const deleteProduct = catchAsync(async (req, res) => {
  console.log('deleteProduct cid', req.params.prod_id);
  await productService.deleteProductById(req.params.prod_id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
