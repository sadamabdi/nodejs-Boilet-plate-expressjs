const status = require('http-status');
const validate = (schema) => (req,res,next) =>{

    let { value, error } = schema.validate(req.body);
    if (error) {
        message = error.details[0].message;
        console.log(message)
        return res.status(status.BAD_REQUEST).send(message);
    }
    console.log(req.body)
    next();
}

module.exports = validate;