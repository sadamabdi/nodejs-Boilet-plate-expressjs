let express = require('express');
let routers = express.Router();
let usercont = require('../control/user')


routers.get('/update', usercont.update);
routers.post('/create', usercont.create);
module.exports = routers;