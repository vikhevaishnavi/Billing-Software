// revenueRoutes.js
const express = require('express');
const router = express.Router();
const Billing = require('../models/Billing'); // Adjust the path as necessary

// Get total revenue
router.get('/revenue', async (req, res) => {
    try {
        const billings = await Billing.find();
        const totalRevenue = billings.reduce((acc, billing) => acc + billing.totalAmount, 0);
        console.log(totalRevenue);
        res.json({ totalRevenue });
    } catch (error) {
        console.error('Error fetching revenue:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
