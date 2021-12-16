const Joi = require('joi')

const validateSignUp = (data)=>{
    const schema = Joi.object({
        nombre: Joi.string()
            .min(3)
            .max(30)
            .required(),
        apellido: Joi.string()
            .min(3)
            .max(30)
            .required(),
         apellido2: Joi.string()
            .min(3)
            .max(30)
            .required(),
        correo: Joi.string()
            .email({minDomainSegments: 2, tlds:{allow:['com']}})
            .required(),
        password: Joi.string()
            .min(7)
            .max(30)
            .required(),
        celular: Joi.number()
            .integer()
            .min(900000000)
            .max(999999999)
    })

    return schema.validate(data)
}

const validateSignIn = (data)=>{
    const schema = Joi.object({
        correo: Joi.string()
            .email({minDomainSegments: 2, tlds:{allow:['com']}})
            .required(),
        password: Joi.string()
            .min(7)
            .max(30)
            .required(),
    })
    return schema.validate(data)
}

const validateReset = (data)=>{
    const schema = Joi.object({
        password: Joi.string()
            .min(7)
            .max(30)
            .required(),
    })
    return schema.validate(data)
}


module.exports.validateSignUp = validateSignUp
module.exports.validateSignIn = validateSignIn
module.exports.validateReset = validateReset