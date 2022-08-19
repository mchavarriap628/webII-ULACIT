const mongoose = require('mongoose');

const restauranteSchema = mongoose.Schema(
    {
        nombreRestaurante: {
            type: String,
            required: true,
        },
        direccionFisica: {
            type: String,
            required: true,
        },
        emailRestaurante: {
            type: String,
            required: true,
            unique: true,
        },
        telRestaurante: {
            type: String,
            required: true,
        },
        gerenteAsignado: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Restaurante = mongoose.model('Restaurante', restauranteSchema);

module.exports = Restaurante;