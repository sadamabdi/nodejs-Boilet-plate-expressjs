let express = require('express');
let routers = express.Router();
let {userCtrl} = require('../controller')
let validate = require('../middleware/validator')
let {autherization,authentication} = require('../middleware/auth')
let {userValidation} = require('../validations')
let role = require('../helpers/roles')
routers.post('/create',validate(userValidation.create),autherization,authentication(role.add), userCtrl.createUser);
routers.get('/getAll',autherization,authentication(role.viewuser), userCtrl.getAll);
routers.get('/getUser/:userid',autherization,authentication(role.viewuser), userCtrl.getUser);
routers.post('/update',validate(userValidation.update),autherization,authentication(role.update), userCtrl.updateUser);
routers.delete('/delete/:userid',autherization,authentication(role.delete), userCtrl.deleteUser);
module.exports = routers;