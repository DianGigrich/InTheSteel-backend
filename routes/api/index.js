const router = require('express').Router();
const aisleRoutes = require('./aisleRoutes');
const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemRoutes');

router.use('/aisles', aisleRoutes);
router.use('/users', userRoutes);
router.use('/items', itemRoutes);

module.exports = router;
