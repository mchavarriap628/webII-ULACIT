const express = require('express');
const router = express.Router();
const {
    registerRestaurante,
    getRestaurantes,
    getRestauranteById,
    actualizarRestaurante,
    eliminarRestaurante
} = require('../controllers/restauranteController');

//Ruta para ver todos los restaurantes
router.route('/').get(getRestaurantes);
//Ruta para crear un restaurante
router.route('/create').post(registerRestaurante);
//Ruta para ver, editar y eliminar un solo restaurante
router.route('/:id').get(getRestauranteById).put(actualizarRestaurante).delete(eliminarRestaurante);


module.exports = router;