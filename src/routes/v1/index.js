const express = require('express');

const router = express.Router();

router.use('/movie', require('./movie.js'));
router.use('/item', require('./item.js'));

module.exports = router;
