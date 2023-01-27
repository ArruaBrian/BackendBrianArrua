const { Router } = require('express');
const cart = require('../cart.manager');
const manager = require('../products.manager');

const router = Router();

router.get('/', (req, res) => {
  res.json(cart.getProductsInCart());
});

router.post('/product/:pid', (req, res) => {
  const { pid } = req.params;
  const { quantity } = req.query;

  const article = manager.getProductById(pid);

  const product = { productID: article.id, quantity: quantity };

  cart.addNewProductInCart(product);

  res.send('ok');
});

module.exports = router;
