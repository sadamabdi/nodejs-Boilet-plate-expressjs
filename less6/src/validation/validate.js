const Joi = require('joi');
const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
const register = Joi.object({
    username: Joi.string().required(),
    password: Joi.string(),
});

module.exports = {
    login,
    register
}