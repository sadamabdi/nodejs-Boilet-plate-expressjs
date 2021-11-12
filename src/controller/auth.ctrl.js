const status = require('http-status');
const logger = require('../config/logger');
const {authServices} = require('../services')
let { ApiResponses } = require ('../payload/ApirResponse');
let {handleAsync} = require('../utils/util')
const login = handleAsync(async (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = await authServices.login(email,password);
    // let message = res.__('loginSuccess', email);
    res.status(status.OK).send(new ApiResponses(status.OK,'login successfully',loginResponse))
});
const getPermission = handleAsync(async (req, res) =>{
    usersData = await authServices.getPermission();
   logger.info('gell all permissions')
   return res.status(status.OK).send(new ApiResponses(status.OK,'All permissions',usersData))
});
module.exports = {
    login,
    getPermission
}