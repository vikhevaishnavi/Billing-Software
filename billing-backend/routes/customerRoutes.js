const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();

// Add Customer
router.post('/add', async (req, res) => {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
});

// View Customers
router.get('/', async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
});

module.exports = router;
