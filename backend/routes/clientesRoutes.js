const express = require('express');
const router = express.Router();
const { getClientes, addCliente, getClienteById } = require('../controllers/clienteController');

//Ruta para ver todos los clientes
router.route('/').get(getClientes);
//Ruta para crear un cliente
router.route('/add').post(addCliente);
//Busca cliente por ID
router.route('/:id').get(getClienteById);

module.exports = router;