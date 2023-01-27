const express = require('express');
const manager = require('./products.manager');
const cart = require('./cart.manager');
const router = require('./router');

const app = express();

app.use(express.urlencoded({ extended: true }));

router(app);

app.listen(3000, () => console.log('escuchando en el puerto 3000'));
