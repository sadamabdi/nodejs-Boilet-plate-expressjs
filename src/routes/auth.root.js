let express = require('express');
let routers = express.Router();
let {authCtrl} = require('../controller')
let validate = require('../middleware/validator')
let {authValidation} = require('../validations')
routers.post('/login', authCtrl.login);
// routers.post('/register', authCtrl.register);
routers.get('/permissions', authCtrl.getPermission);

module.exports = routers;