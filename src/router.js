const productsController = require('./routes/products.contoller');
const cartController = require('./routes/cart.controller');

const router = (app) => {
  app.use('/products', productsController);
  app.use('/cart', cartController);
};

module.exports = router;
