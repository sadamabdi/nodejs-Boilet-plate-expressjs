const status = require('http-status');
const {userServices} = require('../services');
const logger = require('../config/logger');
let { ApiError } = require ('../payload/apiError');
let { ApiResponses } = require ('../payload/ApirResponse');

 const getAll = (req, res) =>{
    usersData = userServices.getAll();
    logger.info('gell all data')
     return res.status(status.OK).send(new ApiResponses(status.OK,'All Users',usersData))
};
const getUser = (req, res) =>{
    let data = req.body;
    usersData = userServices.getUser(data.email);
    logger.info('gell single data by'+data.email)
    return res.status(status.OK).send(new ApiResponses(status.OK,'fetch single user with emial:'+data.email,usersData))
};
const updateUser = (req, res) =>{
    let data = req.body;
    if (!userServices.isEmailExist(data.email)){
        logger.info('This email not exist'+data.email)
        return res.status(status.OK).send(new ApiError(status.OK,'Unknown email ',data.email))

    }
    resp = userServices.updateUser(data);
    if (resp){
        return res.status(status.OK).send(new ApiResponses(status.OK,'updated successfully',resp))
    }


};
const deleteUser = (req, res) =>{
    let data = req.body;
    if (!userServices.isEmailExist(data.email)){
        logger.info('you cannot delete unknown email '+data.email)
        return res.status(status.NOT_ACCEPTABLE)
            .send(new ApiError(status.NOT_ACCEPTABLE,'unkonwn email ',data.email))
    }
    logger.info('delete user data with email '+data.email)
    resp = userServices.deleteUser(data.email);
    if (resp){
        return  res.status(status.OK).send(new ApiResponses(status.OK,'deleted successfully',resp));
    }
    return  res.status(status.NOT_ACCEPTABLE).send(new ApiError(status.NOT_ACCEPTABLE,'somthing error',resp));

};
const createUser = (req, res) =>{
    let data = req.body;
    if (userServices.isEmailExist(data.email)){
        logger.info('email exists '+data.email)
       return res.status(status.NOT_ACCEPTABLE).send(new ApiError(status.NOT_ACCEPTABLE,'Email exists',data.email));
    }
    resp = userServices.createUser(data);
    if (resp){
        return res.status(status.OK).send(new ApiResponses(status.OK,'created successfully',resp))
    }
    return res.status(status.NOT_ACCEPTABLE).send(new ApiError(status.NOT_ACCEPTABLE,'something wrong',data.email));

};

module.exports = {
    getAll,
    getUser,
    updateUser,
    deleteUser,
    createUser
}