const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        tel: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;