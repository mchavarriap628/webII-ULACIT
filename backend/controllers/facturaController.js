const asyncHandler = require("express-async-handler");
const Factura = require('../models/facturaModel');

/*-------------------------- Ver Factura ------------------------------*/
const getFactura = asyncHandler(async (req, res) => {
    const factura = await Factura.find();
    res.json(factura);
});

/*-------------------------- Registrar Factura ------------------------------*/
const addFactura = asyncHandler(async (req, res) => {
    const { facProducto, precioUnit, cantidad, precioTotal } = req.body;

    const factura = await Factura.create({
        facProducto, precioUnit, cantidad, precioTotal
    });

    if (factura) {
        res.status(201).json({
            _id: factura._id,
            facProducto: factura.facProducto,
            precioUnit: factura.precioUnit,
            cantidad: factura.cantidad,
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
        await Factura.remove();
        res.json({ message: "Factura eliminada" });
    } else {
        res.status(404);
        throw new Error("Facturas no encontradas para eliminar");
    }

});


module.exports = { getFactura, addFactura, eliminarFactura };