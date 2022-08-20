const express = require('express');
const router = express.Router();
const {
    registerUser,
    authUser,
    getGerentes,
    getUsuarios,
    getUserById,
    actualizarUser,
    eliminarUser
} = require('../controllers/userController');

//Ruta para registrar usuarios
router.route('/').get(getUsuarios).post(registerUser);
//Ruta para proceso de login
router.route('/login').post(authUser);
//Ruta para obtener los gerentes de la DB
router.route('/gerentes').get(getGerentes);
//Ruta para buscar un elemento, actualizar un elemento y eliminar un elemento
router.route('/:id').get(getUserById).put(actualizarUser).delete(eliminarUser);

module.exports = router;