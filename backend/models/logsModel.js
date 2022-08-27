const mongoose = require('mongoose');

const logsSchema = mongoose.Schema(
    {
        actor: {
            type: String,
            required: true,
        },
        accion: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Logs = mongoose.model('Logs', logsSchema);

module.exports = Logs;