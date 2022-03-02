const express = require('express');

const productsController = require('../controller/Product')

const router = express.Router();

router.get('/add-product', productsController.getAppProduct);

router.post('/add-product', productsController.postAddProducts);

module.exports = router;
