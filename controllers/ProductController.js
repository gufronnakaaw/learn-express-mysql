const db = require('../utils/db');

class ProductsController {
  async index(req, res) {
    const data = await db.promise().query('SELECT * FROM products');

    return res.json({
      data: data[0],
    });
  }

  list(req, res) {
    return res.json({
      message: 'this is list of products',
    });
  }
}

module.exports = new ProductsController();
