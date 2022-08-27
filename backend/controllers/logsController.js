const asyncHandler = require("express-async-handler");
const Logs = require('../models/logsModel');

/*-------------------------- Ver Logs ------------------------------*/
const getLogs = asyncHandler(async (req, res) => {
    const logs = await Logs.find();
    res.json(logs);
});

/*-------------------------- Registrar Log ------------------------------*/
const addLogs = asyncHandler(async (req, res) => {
    const { actor, accion } = req.body;

    const logs = await Logs.create({
        actor, accion
    });

    if (logs) {
        res.status(201).json({
            _id: logs._id,
            actor: logs.actor,
            accion: logs.accion
        });
    } else {
        res.status(400);
        throw new Error("Error Ocurred!")
    }
});

module.exports = { getLogs, addLogs };