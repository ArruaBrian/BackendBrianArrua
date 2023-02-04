const { Router } = require('express');
const manager = require('../products.manager');

const router = Router();

router.get('/', (req, res) => {
  let products = manager.getProducts();

  let productsHandleBars = {
    title: 'productos',
    productos: products,
  };

  res.render('index', productsHandleBars);
});

module.exports = router;
