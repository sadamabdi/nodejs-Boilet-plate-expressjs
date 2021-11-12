const Joi = require('joi');
const create = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    fullName: Joi.string().required()
});
const update = Joi.object({
    userid: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    fullName: Joi.string().required(),
    active: Joi.number().required(),
});

module.exports = {
    create,
    update
}