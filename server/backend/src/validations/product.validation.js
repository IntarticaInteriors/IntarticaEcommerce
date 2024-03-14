const Joi = require('joi');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    Category:Joi.string().required(),
    brand: Joi.string().required(),
    size: Joi.number(),
    price: Joi.number().required(),
    picture: Joi.string().required(),
    color: Joi.string(),
    stockAvailable: Joi.number().required(),
    discount:Joi.number(),
  }),
};

const getProducts = {
  query: Joi.object().keys({}),
};

const getProductById = {
  params: Joi.object().keys({
    prod_id: Joi.string().required(),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    prod_id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string(),
      Category:Joi.string(),
      brand: Joi.string(),
      size: Joi.number(),
      price: Joi.number(),
      picture: Joi.string(),
      color: Joi.string(),
      stockAvailable: Joi.number(),
      discount:Joi.number(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    prod_id: Joi.string().required(),
  }),
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
