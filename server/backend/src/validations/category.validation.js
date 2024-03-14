const Joi = require('joi');

const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

const getCategories = {
  query: Joi.object().keys({}),
};

const getCategoryById = {
  params: Joi.object().keys({
    category_id: Joi.number().integer().positive().required(),
  }),
};

const updateCategory = {
  params: Joi.object().keys({
    category_id: Joi.number().integer().positive().required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string(),
    })
    .min(1),
};

const deleteCategory = {
  params: Joi.object().keys({
    category_id: Joi.string().required(),
  }),
};

module.exports = {
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
