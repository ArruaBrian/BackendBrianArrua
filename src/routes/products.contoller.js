const { Router } = require('express');
const manager = require('../products.manager');

const router = Router();

router.get('/', (req, res) => {
  const { limit } = req.query;

  if (limit) {
    res.json(manager.getProducts().slice(0, limit));
  } else {
    res.json(manager.getProducts());
  }
});

router.post('/', (req, res) => {
  console.log(req.query);

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

  res.send('ok');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json(manager.getProductById(id));
});

module.exports = router;
