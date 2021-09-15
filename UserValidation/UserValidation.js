const Joi = require('joi')


const signUpValidation = (data)=>{
    const schema = Joi.object({
        nombre: Joi.string()
        .alphanum
        .min(3)
        .max(30)
        .required(),
        apellido: Joi.string()
        .min(3)
        .max(30)
        .required(),
        email: Joi.string()
        .email({minDomainSegments: 2, tlds: {allow: ['com']}})
        .required(),
        password: Joi.string()
        .min(8)
        .max(24)
        .required(),
        DNI: Joi.number()
        .interger()
        .required(),

    })
    schema.validate(data)
}

module.exports.signUpValidation = signUpValidation