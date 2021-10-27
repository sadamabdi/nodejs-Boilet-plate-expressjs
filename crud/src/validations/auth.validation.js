const Joi = require('joi');
const login = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
});
const register = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    location: Joi.string().required(),
    age: Joi.number().required().min(70).max(100),
    password: Joi.string().required()
});

module.exports = {
    login,
    register
}