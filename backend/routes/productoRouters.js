const express = require('express');
const router = express.Router();
const { getProductos, addProducto } = require('../controllers/productoContoller');

//Ruta para ver todos los productos
router.route('/').get(getProductos);
//Ruta para crear un producto
router.route('/add').post(addProducto);

module.exports = router;