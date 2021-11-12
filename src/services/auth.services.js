const {logger} = require('../config/logger');
const {userModel} = require('../models')
const {permission} = require('../models')
const {ApiError} = require('../payload/apiError')
const jwt = require('jsonwebtoken');
const login = async (email,password) => {
// logger.info(`authentication email ${email} and password ${password}`);
let user = await userModel.getUserByEmailAndPassword(email,password);
if (user.length <= 0){
    throw new ApiError(401,`Email or password doesn't match`)
}
console.log(user[0].USERID);
const token = jwt.sign({userid:user[0].userid,role:user[0].rolename}, process.env.SecretKey, {expiresIn: '58s'});
return  {'accesstoken':token,'users':user};

}

const getPermission = async () => {
    let resp =  await permission.allPermissions();
    if (resp.length <= 0) {
        throw new ApiError(200,`No permissions to display`)
    }
    return resp;
}
module.exports = {
    login,
    getPermission
}