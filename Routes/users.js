const router = require('express').Router()
const db = require("../DB")
const bcrypt = require('bcryptjs')
const {signUpValidation} = require('../UserValidation/UserValidation.js')

router.post('signUp', async (req, res)=>{
    // validating data
    const {error} = signUpValidation(req.body)
    if(error){
        return res.send('There was an error')
    }

    // check if there is an user with that email

    const checkingUser = await db.query('Select email from Users where email=$1', [req.body.email])

    if (checkingUser.rowCounts >= 1){
        return res.send('There already exists an account with that email')
    }
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, (err, salt)=>{
        bcrypt.hash(req.body.password, salt, async (err, hash)=>{
            const newUser = await db.query('INSERT into Users (user_nombre, user_apellido, user_email, user_password, user_DNI, user_celular) values($1, $2, $3, $4, $5, $6)', [req.body.nombre, req.body.apellido, req.body.email, hash, req.body.dni,req.body.celular])
            if (newUser.rowCounts > 0){
                res.status(201).json({
                    status: 'Created'
                })
            }
        })
    })
})




module.exports = router;