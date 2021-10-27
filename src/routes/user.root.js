let express = require('express');
let routers = express.Router();
let {userCtrl} = require('../controller')
let validate = require('../middleware/validator')
let jwtToken = require('../middleware/auth')
let {userValidation} = require('../validations')

routers.post('/create',validate(userValidation.create), userCtrl.createUser);
routers.get('/getAll',jwtToken, userCtrl.getAll);
routers.post('/getUser', userCtrl.getUser);
routers.post('/update',validate(userValidation.update), userCtrl.updateUser);
routers.post('/delete', userCtrl.deleteUser);
module.exports = routers;