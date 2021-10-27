let express = require('express');
let routers = express.Router();
let authcon = require('../control/bashal')


routers.get('/aa', authcon.aa);
routers.get('/bb', authcon.bb);
module.exports = routers;