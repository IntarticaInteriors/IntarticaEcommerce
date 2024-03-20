const { PrismaClient } = require('@prisma/client');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const prisma = new PrismaClient();
const crypto = require('crypto');
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const RandomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

const s3 = new S3Client({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: 'AKIAW3MEAVEVC6PFIK5Q',
    secretAccessKey: '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',
  },
});

/**
 * Create a user
 * @param {Object} productBody
 * @returns {Promise<prisma.products>}
 */

const createProduct = async (productBody, productFiles) => {

  const { name, description, Category, brand, size, price, stockAvailable, color } = productBody;
  
  let Names = [];
  for (const elem of productFiles) {
    const Imagename = RandomImageName();
    Names = [...Names, Imagename];
    const params = {
      Bucket: 'eazymaterials',
      Key: Imagename,
      Body: elem.buffer,
      ContentType: "image/jpeg",
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);
  }

  // Create a new product
  const createdProduct = await prisma.products.create({
    data: {
      name: name,
      description: description,
      Category: {
        connect: {
          name: Category,
        },
      },
      brand: brand,
      size: parseInt(size),
      price: parseFloat(price),
      picture: Names[0],
      stockAvailable: parseInt(stockAvailable),
      color: color,
      images: Names,
    },
  });
  return createdProduct;
  // return 'uploaded product';
};
/**
 * Get all products
 * @param {}
 * @returns {Promise<prisma.products>}
 */
const getAllProducts = async () => {
  const products = await prisma.products.findMany();
  for (let product of products) {
    const getObjectParams = {
      Bucket: 'eazymaterials',
      Key: product.picture,
    };
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command);
    product.imageUrl = url;
    console.log('product', product);
  }
  console.log('products', products);

  return products;
};

/**
 * Get user by id
 * @param {String} prisma.products.prod_id
 * @returns {Promise<prisma.products>}
 */
const getProductById = async (prod_id) => {
  const foundProduct = await prisma.products.findUnique({ where: { prod_id: prod_id } });
  foundProduct.imagesURLS=[];
  for(const image of foundProduct.images){
    const getObjectParams = {
      Bucket: 'eazymaterials',
      Key: image,
    };
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command);
    foundProduct.imagesURLS = [...foundProduct.imagesURLS,url];
  }
  console.log('product', foundProduct);
  return foundProduct;
};

/**
 * Get user by email
 * @param {string} name
 * @returns {Promise<prisma.products>}
 */
const getProductByName = async (name) => {
  const foundProduct = await prisma.products.findMany({ where: { name: name } });
  return foundProduct;
};

/**
 * Update product by id
 * @param {ObjectId} prod_id
 * @param {Object} updateBody
 * @returns {Promise<prisma.products>}
 */
const updateProductById = async (prod_id, updateBody) => {
  const product = await prisma.products.findUnique({ where: { prod_id: prod_id } });
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  if (updateBody.name && (await isProductTaken(updateBody.name))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Productname already taken');
  }
  const updateProductById = await prisma.products.update({
    where: { prod_id: prod_id },
    data: updateBody,
  });

  return updateProductById;
};

/**
 * Delete user by id
 * @param {ObjectId} prisma.products.prod_id
 * @returns {Promise<prisma.products>}
 */
const deleteProductById = async (prod_id) => {
  console.log('deleteCategoryById', prod_id);
  const product = await prisma.products.findUnique({ where: { prod_id: prod_id } });
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  for (const image of product.images) {
    const params = {
      Bucket: 'eazymaterials',
      Key: image,
    };
    const command = DeleteObjectCommand(params);
    await s3.send(command);
  }
  const deletedProductById = await prisma.products.delete({
    where: { prod_id: prod_id },
  });
  return deletedProductById;
};

module.exports = {
  createProduct,
  deleteProductById,
  getAllProducts,
  updateProductById,
  getProductById,
  getProductByName,
};
