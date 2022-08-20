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

/*-------------------------- Ver un solo User por ID ------------------------------*/

const getClienteById = asyncHandler(async (req, res) => {
    const cliente = await Cliente.findById(req.params.id);

    if (cliente) {
        res.json(cliente);
    } else {
        res.status(400).json({ message: "Cliente no encontrado" });
    }
});


module.exports = { getClientes, addCliente, getClienteById };