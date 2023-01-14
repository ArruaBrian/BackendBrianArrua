const fs = require('fs');
const { title } = require('process');

class productsManager {
  constructor() {
    this.path = './wareshop.json';
  }

  initWareShop() {
    if (fs.existsSync(this.path)) {
      return;
    } else {
      fs.writeFileSync(this.path, '[]');
    }
  }

  /**
   * Add new product to wareshop
   *
   * @param {*} title title of product
   * @param {*} description desc of product
   * @param {*} price price unit
   * @param {*} thumb thumbnail
   * @param {*} code code of the product
   * @param {*} stock stock in wareShop
   */

  addNewProduct(title, description, price, thumb, code, stock) {
    if (title && description && price && thumb && code && stock) {
      let product = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumb,
        code: this.codeManager(code),
        stock: stock,
        id: this.idManager(),
      };

      const obj = this.readParsedFile();

      obj.push(product);

      fs.writeFileSync(this.path, `${JSON.stringify(obj)}`);
    } else {
      console.error(`Todos los parametros son obligatorios!`);
    }
  }

  readParsedFile() {
    const content = fs.readFileSync(this.path, 'utf-8');
    const obj = JSON.parse(content);

    return obj;
  }

  idManager() {
    const obj = this.readParsedFile();

    let products = obj.length;

    if (products != 0) {
      let lastId = obj[products - 1].id;

      return lastId + 1;
    } else {
      return 1;
    }
  }

  codeManager(code) {
    const content = fs.readFileSync(this.path, 'utf-8');
    const obj = JSON.parse(content);

    if (!obj.some((element) => element.code == code)) {
      return code;
    } else {
      console.warn(`El codigo ${code} ya se encuentra fichado`);
    }
  }

  getProducts() {
    const obj = this.readParsedFile();

    return obj;
  }

  getProductById(id) {
    const obj = this.readParsedFile();

    return obj.find((element) => element.id == id);
  }

  updateProduct(id, parameter, newValue) {
    const obj = this.readParsedFile();
    const product = obj.find((element) => element.id == id);
    product[parameter] = newValue;

    fs.writeFileSync(this.path, `${JSON.stringify(obj)}`);
  }

  deleteProduct(id) {
    const obj = this.readParsedFile();
    const newArray = obj.filter((element) => element.id !== id);

    fs.writeFileSync(this.path, `${JSON.stringify(newArray)}`);
  }
}

const manager = new productsManager();

manager.initWareShop();

manager.addNewProduct(
  'zapato',
  'es un zapato',
  900,
  'link random',
  12463734,
  2
);
manager.addNewProduct(
  'sombrero',
  'es un sombrero',
  200,
  'link random',
  63734,
  10
);

console.log(manager.getProducts());
console.log(manager.getProductById(1));

manager.updateProduct(1, 'title', 'colchon');

manager.deleteProduct(1);
