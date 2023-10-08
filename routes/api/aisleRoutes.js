const router = require('express').Router();
const { Aisle } = require('../../models');

// GET all aisles
router.get('/', async (req, res) => {
  try {
    const aisleData = await Aisle.findAll();
    res.status(200).json(aisleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;