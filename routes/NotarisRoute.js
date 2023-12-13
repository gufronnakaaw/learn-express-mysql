const express = require('express');

// controllers
const NotarisController = require('../controllers/NotarisController');

const route = express.Router();

route.get('/notaris', NotarisController.index);

module.exports = route;
