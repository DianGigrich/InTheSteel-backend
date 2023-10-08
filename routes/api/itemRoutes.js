const router = require('express').Router();
const { Item } = require('../../models');

// GET all item
router.get('/', async (req, res) => {
  try {
    const itemData = await Item.findAll();
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;