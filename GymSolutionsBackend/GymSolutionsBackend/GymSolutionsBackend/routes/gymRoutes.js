const express = require('express');
const router = express.Router();
const gymController = require('../controllers/gymController');

router.get('/', gymController.getAllGyms);
router.post('/', gymController.createGym);

module.exports = router;