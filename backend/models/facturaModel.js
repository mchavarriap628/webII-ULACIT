const mongoose = require('mongoose');

const facturaSchema = mongoose.Schema(
    {
        clienteNombre: {
            type: String,
            required: true,
        },
        restauranteNombre: {
            type: String,
            required: true,
        },
        productoNombre: {
            type: String,
            required: true,
        },
        cantidad: {
            type: Number,
            required: true,
        },
        precioUnit: {
            type: Number,
        },
        precioTotal: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Factura = mongoose.model('Factura', facturaSchema);

module.exports = Factura;