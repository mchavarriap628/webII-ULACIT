const asyncHandler = require("express-async-handler");
const Producto = require('../models/productoModel');

/*-------------------------- Ver Productos ------------------------------*/
const getProductos = asyncHandler(async (req, res) => {
    const producto = await Producto.find();
    res.json(producto);
});

/*-------------------------- Registrar Profucto ------------------------------*/
const addProducto = asyncHandler(async (req, res) => {
    const { prodNombre, categoria, precio } = req.body;

    const productoExiste = await Producto.findOne({ prodNombre });
    if (productoExiste) {
        res.status(400);
        throw new Error("¡Un producto con esta información ya existe!");
    }

    const producto = await Producto.create({
        prodNombre,
        categoria,
        precio
    });

    if (producto) {
        res.status(201).json({
            _id: producto._id,
            prodNombre: producto.prodNombre,
            categoria: producto.categoria,
            precio: producto.precio,
        });
    } else {
        res.status(400);
        throw new Error("Error Ocurred!")
    }
});


module.exports = { getProductos, addProducto };