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

router.route('/').get(getUsuarios).post(registerUser);
router.route('/login').post(authUser);
router.route('/gerentes').get(getGerentes);
router.route('/:id').get(getUserById).put(actualizarUser).delete(eliminarUser);

module.exports = router;