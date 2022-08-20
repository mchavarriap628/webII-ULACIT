const asyncHandler = require("express-async-handler");
const Restaurante = require('../models/restauranteModel');

/*-------------------------- Registrar Restaurantes ------------------------------*/
const registerRestaurante = asyncHandler(async (req, res) => {
    const {
        nombreRestaurante,
        direccionFisica,
        emailRestaurante,
        telRestaurante,
        gerenteAsignado
    } = req.body;

    const restauranteExists = await Restaurante.findOne({ emailRestaurante });
    if (restauranteExists) {
        res.status(400);
        throw new Error("¡Un restaurante con esta información ya existe!");
    }

    const restaurante = await Restaurante.create({
        nombreRestaurante,
        direccionFisica,
        emailRestaurante,
        telRestaurante,
        gerenteAsignado,
    });

    if (restaurante) {
        res.status(201).json({
            _id: restaurante._id,
            nombreRestaurante: restaurante.nombreRestaurante,
            direccionFisica: restaurante.direccionFisica,
            emailRestaurante: restaurante.emailRestaurante,
            telRestaurante: restaurante.telRestaurante,
            gerenteAsignado: restaurante.gerenteAsignado,
        });
    } else {
        res.status(400);
        throw new Error("Error Ocurred!")
    }
});

/*-------------------------- Ver Restaurantes ------------------------------*/
const getRestaurantes = asyncHandler(async (req, res) => {
    const restaurantes = await Restaurante.find();
    res.json(restaurantes);
});

/*-------------------------- Ver un solo Restaurante por ID ------------------------------*/

const getRestauranteById = asyncHandler(async (req, res) => {
    const restaurante = await Restaurante.findById(req.params.id);

    if (restaurante) {
        res.json(restaurante);
    } else {
        res.status(400).json({ message: "Restaurante no encontrado" });
    }
});

/*-------------------------- Actualizar Restaurante por ID ------------------------------*/

const actualizarRestaurante = asyncHandler(async (req, res) => {
    const { nombreRestaurante, direccionFisica, gerenteAsignado, emailRestaurante, telRestaurante } = req.body;
    const restaurante = await Restaurante.findById(req.params.id);
    if (restaurante) {
        restaurante.nombreRestaurante = nombreRestaurante;
        restaurante.direccionFisica = direccionFisica;
        restaurante.gerenteAsignado = gerenteAsignado;
        restaurante.emailRestaurante = emailRestaurante;
        restaurante.telRestaurante = telRestaurante;

        const restauranteActualizado = await restaurante.save();
        res.json(restauranteActualizado);
    } else {
        res.status(404);
        throw new Error("El restaurante que desea actualizar no ha sido encontrado en la base de datos");
    }
});

/*-------------------------- Eliminar Restaurante por ID ------------------------------*/

const eliminarRestaurante = asyncHandler(async (req, res) => {
    const restaurante = await Restaurante.findById(req.params.id);
    if (restaurante) {
        await restaurante.remove();
        res.json({ message: "El restaurante ha sido eliminado" });
    } else {
        res.status(404);
        throw new Error("El restaurante que desea eliminar no ha sido encontrado en la base de datos");
    }

});




module.exports = {
    registerRestaurante,
    getRestaurantes,
    getRestauranteById,
    actualizarRestaurante,
    eliminarRestaurante
};