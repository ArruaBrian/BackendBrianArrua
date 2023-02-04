const productsController = require('./routes/products.contoller');
const cartController = require('./routes/cart.controller');
const indexController = require('./routes/index.controller');

const router = (app) => {
  app.use('/products', productsController);
  app.use('/cart', cartController);
  app.use('/', indexController);
};

module.exports = router;
