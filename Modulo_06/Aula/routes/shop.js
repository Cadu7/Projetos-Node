const express = require('express');

const productsController = require('../controller/Product')

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
