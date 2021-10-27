const Joi = require('joi');
const create = Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().required().min(70).max(100),
    password: Joi.string().required()
});
const update = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    location: Joi.string().required(),
    age: Joi.number().required().min(70).max(100),
    password: Joi.string().required()
});

module.exports = {
    create,
    update
}