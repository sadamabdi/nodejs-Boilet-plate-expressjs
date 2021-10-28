const status = require('http-status');
const {ApiError} = require('../payload/apiError')
const jwt = require('jsonwebtoken');
const auth = (req,res,next) =>{
const authHeader = req.headers.authorization;
if (!authHeader){
    throw new ApiError(401,'token');
}
const token = authHeader.split(' ')[1];
var response = jwt.verify(token, process.env.SecretKey);
if (response.user){
    next();
}
    throw new ApiError(401,'you authentication in expired');
}

module.exports = auth;