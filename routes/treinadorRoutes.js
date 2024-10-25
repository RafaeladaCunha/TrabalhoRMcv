const express = require('express');
const router = express.Router();
const treinadorController = require('../controller/treinadorController');


router.get('/', treinadorController.getAllTreinadores);
router.get('/treinador/:id', treinadorController.getTreinadores);

module.exports = router;