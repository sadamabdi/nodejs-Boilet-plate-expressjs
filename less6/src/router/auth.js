let express = require('express');
let routers = express.Router();
let registervaliation = require('../validation/validate')
let authcon = require('../control/auth')
let validate = require('../middlewarevalid/validat')

routers.post('/register',validate(registervaliation.register), authcon.register);
routers.post('/login', authcon.login);
module.exports = routers;