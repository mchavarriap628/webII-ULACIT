const mongoose = require('mongoose');

const productoSchema = mongoose.Schema(
    {
        prodNombre: {
            type: String,
            required: true,
            unique: true,
        },
        prodPrecio: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;