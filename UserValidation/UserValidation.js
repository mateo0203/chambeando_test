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
        correo: Joi.string()
            .email({minDomainSegments: 2, tlds:{allow:['com']}})
            .required(),
        contraseña: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{8,22}$'))
            .required(),
        edad: Joi.number()
            .integer()
            .min(5)
            .max(18)
            .required(),
        colegio: Joi.string()
            .min(3)
            .max(50)
            .required(),
        imagePath: Joi.string()
            .min(13)
            .required()
    })

    return schema.validate(data)
}

const validateSignIn = (data)=>{
    const schema = Joi.object({
        correo: Joi.string()
            .email({minDomainSegments: 2, tlds:{allow:['com']}})
            .required(),
        contraseña: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{8,22}$'))
            .required()
    })
    return schema.validate(data)
}

module.exports.validateSignUp = validateSignUp
module.exports.validateSignIn = validateSignIn