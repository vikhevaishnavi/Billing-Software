const express = require('express');
const Billing = require('../models/Billing');
const router = express.Router();

// Add Billing
router.post('/add', async (req, res) => {
    try {
        const billing = new Billing(req.body);
        await billing.save();
        res.status(201).json(billing);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// View Billing
router.get('/', async (req, res) => {
    try {
        const billing = await Billing.find().populate('customerId products.productId');
        res.json(billing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update Billing
router.put('/:id', async (req, res) => {
    try {
        const billing = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!billing) {
            return res.status(404).json({ message: 'Billing not found' });
        }
        res.json(billing);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete Billing
router.delete('/:id', async (req, res) => {
    try {
        const billing = await Billing.findByIdAndDelete(req.params.id);
        if (!billing) {
            return res.status(404).json({ message: 'Billing not found' });
        }
        res.json({ message: 'Billing deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
