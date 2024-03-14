const { PrismaClient } = require('@prisma/client');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const prisma = new PrismaClient();

/**
 * Create a user
 * @param {Object} categoryBody
 * @returns {Promise<prisma.categories>}
 */
const createCategory = async (categoryBody) => {
  const { name, description } = categoryBody;

  // Create a new category
  const createdCategory = await prisma.categories.create({
    data: {
      name: name,
      description: description,
    },
  });

  return createdCategory;
};

const getAllCategories = async () => {
  const categories = await prisma.categories.findMany();
  return categories;
};

/**
 * Get user by id
 * @param {ObjectId} prisma.categories.category_id
 * @returns {Promise<prisma.categories>}
 */
const getCategoryById = async (category_id) => {
  const foundCategory = await prisma.categories.findUnique({ where: { id: category_id } });
  return foundCategory;
};

/**
 * Get user by email
 * @param {string} name
 * @returns {Promise<prisma.categories>}
 */
const getCategoryByName = async (name) => {
  const foundCategory = await prisma.categories.findUnique({ where: { name: name } });
  return foundCategory;
};

/**
 * Update user by id
 * @param {ObjectId} category_id
 * @param {Object} updateBody
 * @returns {Promise<prisma.categories>}
 */
const updateCategoryById = async (category_id, updateBody) => {
  const category = await prisma.categories.findUnique({ where: { id: category_id } });
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  if (updateBody.name && (await isCategoryTaken(updateBody.name))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const updateCategoryById = await prisma.categories.update({
    where: { id: category_id },
    data: updateBody,
  });
};

/**
 * Delete user by id
 * @param {ObjectId} prisma.categories.category_id
 * @returns {Promise<prisma.categories>}
 */
const deleteCategoryById = async (category_id) => {
  console.log('deleteCategoryById', category_id);
  const category = await prisma.categories.findUnique({ where: { category_id: category_id } });
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  const deletedCategoryById = await prisma.categories.delete({
    where: { category_id: category_id },
  });
  return deletedCategoryById;
};

module.exports = {
  createCategory,
  deleteCategoryById,
  getAllCategories,
  updateCategoryById,
  getCategoryById,
  getCategoryByName,
};

// const isCategoryTaken = async (name, category_id) => {
//   const existingCategory = await prisma.categories.findUnique({
//     where: {
//       name: name,
//     },
//   });

//   return !!existingCategory; // Returns true if the category email is taken, false otherwise
// };
