const asyncHandler = require("express-async-handler");
const Factura = require('../models/facturaModel');

/*-------------------------- Ver Factura ------------------------------*/
const getFactura = asyncHandler(async (req, res) => {
    const factura = await Factura.find();
    res.json(factura);
});

/*-------------------------- Registrar Factura ------------------------------*/
const addFactura = asyncHandler(async (req, res) => {
    const { clienteNombre, restauranteNombre, productoNombre, cantidad, precioUnit, precioTotal } = req.body;

    const factura = await Factura.create({
        clienteNombre, restauranteNombre, productoNombre, cantidad, precioUnit, precioTotal
    });

    if (factura) {
        res.status(201).json({
            _id: factura._id,
            clienteNombre: factura.clienteNombre,
            restauranteNombre: factura.restauranteNombre,
            productoNombre: factura.productoNombre,
            cantidad: factura.cantidad,
            precioUnit: factura.precioUnit,
            precioTotal: factura.precioTotal
        });
    } else {
        res.status(400);
        throw new Error("Error Ocurred!")
    }
});

/*-------------------------- Eliminar Factura ------------------------------*/

const eliminarFactura = asyncHandler(async (req, res) => {
    const factura = await Factura.find();
    if (factura) {
        await factura.remove();
        res.json({ message: "Factura eliminada" });
    } else {
        res.status(404);
        throw new Error("Facturas no encontradas para eliminar");
    }

});


module.exports = { getFactura, addFactura, eliminarFactura };