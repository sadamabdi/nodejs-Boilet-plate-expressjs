const modelData = require('../models/user_models');
const logger = require('../config/logger');
const isEmailExist = (email) => {
    if (modelData.isEmailExist(email)) {
        return true;
    }
    return false;
}
const createUser = (userdata) => {
    winston.info("user created")
    resp = modelData.createUser(userdata);
    return resp;
}
const getAll = () => {
    resp = modelData.getAll();
    return resp;
}
const getUser = (email) => {
    resp = modelData.getUser(email);
    return resp;
}
const updateUser = (userdata) => {
    resp = modelData.updateUser(userdata);
    return resp;
}
const deleteUser = (email) => {
    resp = modelData.deleteUser(email);
    return resp;
}
module.exports = {
    isEmailExist,
    createUser,
    getAll,
    getUser,
    updateUser,
    deleteUser
}