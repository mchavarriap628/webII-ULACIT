const express = require('express');
const router = express.Router();
const { getLogs, addLogs } = require('../controllers/logsController');

//Ver
router.route('/').get(getLogs);
//Agregar
router.route('/add').post(addLogs);

module.exports = router;