class productsManager {
  constructor() {
    this.wareShop = [];
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

      this.wareShop.push(product);
    } else {
      console.error(`Todos los parametros son obligatorios!`);
    }
  }

  idManager() {
    let products = this.wareShop.length;

    if (products != 0) {
      let lastId = this.wareShop[products - 1].id;

      return lastId + 1;
    } else {
      return 1;
    }
  }

  codeManager(code) {
    if (!this.wareShop.some((element) => element.code == code)) {
      return code;
    } else {
      console.warn(`El codigo ${code} ya se encuentra fichado`);
    }
  }

  getProducts() {
    return this.wareShop;
  }

  getProductById(id) {
    return this.wareShop.find((element) => element.id == id);
  }
}

const manager = new productsManager();

manager.addNewProduct('zapatos', 'unos zapatos', 100, 'url falsa', 113328, 2);
manager.addNewProduct('collar', 'un collar', 700, 'url falsa', 134324, 10);
manager.addNewProduct('mochila', 'una mochila', 2100, 'url falsa', 435634, 70);
console.log(manager.getProductById(1));
console.log('---------------------------------------------');
console.log(manager.getProducts());

console.log('---------------------------------------------');

manager.addNewProduct(
  'zapatos copia',
  'unos zapatos',
  100,
  'url falsa',
  113328,
  2
);
