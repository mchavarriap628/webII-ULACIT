const express = require('express');
const router = express.Router();
const { getFactura, addFactura, eliminarFactura } = require('../controllers/facturaController');

//Ver
router.route('/').get(getFactura).delete(eliminarFactura);
//Agregar
router.route('/add').post(addFactura);

module.exports = router;