const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Add Product
router.post('/add', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
});

// View Products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;
