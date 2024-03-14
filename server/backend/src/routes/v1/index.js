const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const productRoute = require('./product.route');
// const adminRoute = require('./admin.route');
// const cartRoute = require('./cart.route');
// const orderRoute = require('./order.route');
const categoryRoute = require('./category.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path:'/category',
    route:categoryRoute,
  },
  {
    path:'/products',
    route: productRoute,
  },
  //TODO 
  // {
  //   // path:'/admin',
  //   // route:adminRoute,
  // },
  // {
  //   // path:'/cart',
  //   // route:cartRoute,
  // },
  // {
  //   // path:'/order',
  //   // route:orderRoute,
  // },
  
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
