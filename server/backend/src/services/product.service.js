const { PrismaClient } = require('@prisma/client');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const prisma = new PrismaClient();
const crypto = require('crypto');
const { S3Client, PutObjectCommand ,GetObjectCommand} = require('@aws-sdk/client-s3');
const {getSignedUrl}=require("@aws-sdk/s3-request-presigner")
const {getObjectURL}=require("../aws/s3Routes");
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
//
// const putObjectURL=async(filename,contentType)=>{
//   //key as in where to store
//   const command= new PutObjectCommand({
//       Bucket:"eazymaterials",
//       Key:`/uploads/user-uploads/${filename}`,
//       ContentType:contentType
//   })
//   const url=await getSignedUrl(s3Client,command);
//   return url;
// }
//

const createProduct = async (productBody, productFiles) => {
  const { name, description, Category, brand, size, price, picture, stockAvailable, color } = productBody;

  
  let Names = [];
  for (const elem of productFiles) {
    const Imagename = RandomImageName();
    Names = [...Names, Imagename];
    const params = {
      Bucket: 'eazymaterials',
      Key: Imagename,
      Body: elem.buffer,
      ContentType: elem.mimetype,
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);
  }

  console.log('Names', Names);

  let ArrayofURLS=[];
  for (const element of Names) {
    const url = await getObjectURL(element);
    ArrayofURLS = [...ArrayofURLS, url];
    console.log("ArrayofURLS", ArrayofURLS);
  }
  
  if(ArrayofURLS.length > 0){
    console.log("Length is greater than one");
  }

  // const findProduct = await prisma.products.findFirst({
  //   where: {
  //     name: name,
  //     description: {equals:description},
  //     brand: brand,
  //     size: size,
  //     price: price,
  //     // picture: {equals: picture},
  //     color:color
  //   },
  // });

  // if (findProduct) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Product already exists');
  // }

  // Create a new product
  // const createdProduct = await prisma.products.create({
  //   data: {
  //     name: name,
  //     description: description,
  //     Category: {
  //       connect: {
  //         name: Category,
  //       },
  //     },
  //     brand: brand,
  //     size: size,
  //     price: price,
  //     picture: picture,
  //     stockAvailable: stockAvailable,
  //     color:color
  //   },
  // });
  // return createdProduct;
  return 'uploaded product';
};
/**
 * Get all products
 * @param {}
 * @returns {Promise<prisma.products>}
 */
const getAllProducts = async () => {
  const products = await prisma.products.findMany();
  return products;
};

/**
 * Get user by id
 * @param {String} prisma.products.prod_id
 * @returns {Promise<prisma.products>}
 */
const getProductById = async (prod_id) => {
  const foundProduct = await prisma.products.findUnique({ where: { prod_id: prod_id } });
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

// const isCategoryTaken = async (name, prod_id) => {
//   const existingCategory = await prisma.products.findUnique({
//     where: {
//       name: name,
//     },
//   });

//   return !!existingCategory; // Returns true if the category email is taken, false otherwise
// };
