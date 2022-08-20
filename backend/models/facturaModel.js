const mongoose = require('mongoose');

const facturaSchema = mongoose.Schema(
    {
        facProducto: {
            type: String,
            required: true,
        },
        precioUnit: {
            type: Number,
        },
        cantidad: {
            type: Number,
            required: true,
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