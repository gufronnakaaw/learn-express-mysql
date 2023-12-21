const express = require('express');

// controllers
const ProductController = require('../controllers/ProductController');

const route = express.Router();

route.get('/products', ProductController.index);
route.get('/products/list', ProductController.list);
route.get('/products/edit/:id', ProductController.edit);
route.delete('/products/delete/:id', ProductController.deleteProducts);

module.exports = route;
