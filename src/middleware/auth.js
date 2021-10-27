const status = require('http-status');
const {ApiError} = require('../payload/apiError')
const jwt = require('jsonwebtoken');
const auth = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
if (!token){
    throw new ApiError(401,'token');
}
    var response = jwt.verify(token, process.env.SecretKey);
if (response.user){
    next();
}
    throw new ApiError(401,'you authentication in expired');
}

module.exports = auth;