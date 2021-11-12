const status = require('http-status');
const {userServices} = require('../services');
const logger = require('../config/logger');
const database = require('../config/database');
let { ApiError } = require ('../payload/apiError');
let { ApiResponses } = require ('../payload/ApirResponse');
let {handleAsync} = require('../utils/util');

const getAll = handleAsync(async (req, res) =>{
     usersData = await userServices.getAll();
    logger.info('gell all data')
    return res.status(status.OK).send(new ApiResponses(status.OK,'All Users',usersData))
});

//  get user
const getUser = handleAsync(async (req, res) =>{
    let resp = await userServices.isIdExist(req.params.userid);
    if(resp){
        let usersInfo = await userServices.getUser(req.params.userid);
        logger.info('gell single data by'+req.params.userid)
        return res.status(status.OK).send(new ApiResponses(status.OK,'fetch single user with id:'+req.params.userid,usersInfo))
    }
    

});

// create user
const updateUser = handleAsync(async (req, res) =>{
    let data = req.body;
    let response = await userServices.isIdExist(data.userid);
    if (response){
        let resp = userServices.updateUser(data);
        return res.status(status.OK).send(new ApiResponses(status.OK,'updated successfully'))

    }
});

// delete user
const deleteUser = handleAsync(async (req, res) =>{
    let resp = await userServices.isIdExist(req.params.userid);
    if (resp){
    logger.info('delete user data with email '+req.params.userid)
    resp = userServices.deleteUser(req.params.userid);
    return  res.status(status.OK).send(new ApiResponses(status.OK,'deleted successfully'));
    }
   
});
const createUser = handleAsync(async (req, res) =>{
    let data = req.body;
    let resp = await userServices.isEmailExist(data.email);
    if (resp){
    resp = userServices.createUser(data);
    return res.status(status.OK).send(new ApiResponses(status.NOT_ACCEPTABLE,'new user created'));
}
});

module.exports = {
    getAll,
    getUser,
    updateUser,
    deleteUser,
    createUser,
    
}