const status = require('http-status');
const logger = require('../config/logger');
const {authServices} = require('../services')
let { ApiResponses } = require ('../payload/ApirResponse');

const login = (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = authServices.login(email,password);
    res.status(status.OK).send(new ApiResponses(status.OK,'login successfully',loginResponse))
}
const register = (req,res) => {

}
module.exports = {
    login,
    register
}