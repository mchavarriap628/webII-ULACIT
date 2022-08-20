const asyncHandler = require("express-async-handler");
const Cliente = require('../models/clienteModel');

/*-------------------------- Ver Clientes ------------------------------*/
const getClientes = asyncHandler(async (req, res) => {
    const cliente = await Cliente.find();
    res.json(cliente);
});

/*-------------------------- Registrar Clientes ------------------------------*/
const addCliente = asyncHandler(async (req, res) => {
    const { nombre, email, tel } = req.body;

    const clienteExiste = await Cliente.findOne({ email });
    if (clienteExiste) {
        res.status(400);
        throw new Error("¡Un cliente con esta información ya existe!");
    }

    const cliente = await Cliente.create({
        nombre,
        email,
        tel
    });

    if (cliente) {
        res.status(201).json({
            _id: cliente._id,
            nombre: cliente.nombre,
            email: cliente.email,
            tel: cliente.tel
        });
    } else {
        res.status(400);
        throw new Error("Error Ocurred!")
    }
});


module.exports = { getClientes, addCliente };