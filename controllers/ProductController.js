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

  async edit(req, res) {
    const id = req.params.id;

    const data = await db
      .promise()
      .query(`SELECT * FROM products where id = '${id}'`);

    return res.json({
      data: data[0],
    });
  }

  async deleteProducts(req, res) {
    const id = req.params.id;

    await db.promise().query(`DELETE FROM products WHERE id = '${id}'`);

    return res.json({
      message: 'data berhasil dihapus',
    });
  }
}

module.exports = new ProductsController();
