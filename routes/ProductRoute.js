const express = require('express');

// controllers
const ProductController = require('../controllers/ProductController');

const route = express.Router();

route.get('/products', ProductController.index);
route.get('/products/list', ProductController.list);

module.exports = route;
