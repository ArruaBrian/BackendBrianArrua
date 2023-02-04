const { Router } = require('express');
const manager = require('../products.manager');

const router = Router();

router.get('/', (req, res) => {
  const { limit } = req.query;

  let products = '';

  if (limit) {
    products = manager.getProducts().slice(0, limit);
    res.json(products);
  } else {
    products = manager.getProducts();
    res.json(products);
  }
});

router.post('/', (req, res) => {
  const { title, description, price, thumb, code, stock, category, status } =
    req.query;

  manager.addNewProduct(
    title,
    description,
    price,
    thumb,
    code,
    stock,
    category,
    status
  );

  io.emit('postNewProduct', manager.readParsedFile());

  res.send('ok');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json(manager.getProductById(id));
});

module.exports = router;
