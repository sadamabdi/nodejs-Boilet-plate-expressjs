const {logger} = require('../config/logger');
const {userModel} = require('../models')
const {ApiError} = require('../payload/apiError')
const {ApiResponses} = require('../payload/ApirResponse')
const jwt = require('jsonwebtoken');

const login = (email,password) => {
// logger.info(`authentication email ${email} and password ${password}`);
let user = userModel.getUserByEmailAndPassword(email, password);
if (user.length <= 0){
    throw new ApiError(401,`Email or password doesn't match`)
}
// let token = jwt.sign({user},process.env.SecretKey)
    // var decoded = jwt.verify(token, process.env.SecretKey);
    // console.log(decoded.user) // bar
    const payload = { username: 'john', email: 'john@gmail.com' };
// Create a JSON Web Token (JWT)
    const token = jwt.sign({user}, process.env.SecretKey, {expiresIn: '58s'});
    console.log(token);
// After 6s: verify
return  {'accesstoken':token};

}
module.exports = {
    login
}