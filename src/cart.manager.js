const fs = require('fs');

class cartManager {
  constructor() {
    this.path = './cart.json';
  }

  initCart() {
    if (fs.existsSync(this.path)) {
      return;
    } else {
      fs.writeFileSync(this.path, '[]');
    }
  }

  getProductsInCart() {
    const content = fs.readFileSync(this.path, 'utf-8');
    const obj = JSON.parse(content);

    return obj;
  }

  addNewProductInCart(product) {
    const obj = this.getProductsInCart();

    obj.push(product);

    fs.writeFileSync(this.path, `${JSON.stringify(obj)}`);
  }
}

const cart = new cartManager();

cart.initCart();

module.exports = cart;
