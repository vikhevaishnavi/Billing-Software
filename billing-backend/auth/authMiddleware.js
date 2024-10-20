const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // Use environment variable
        if (err) {
            console.error('Token verification failed:', err);
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        req.user = decoded; // Assuming the user ID is stored in the token
        next();
    });
};

module.exports = authMiddleware;
