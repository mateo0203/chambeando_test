const Router = require('express').Router()
const db = require("../DB")
const bcrypt = require('bcryptjs')
const {validateSignUp, validateSignIn} = require('../UserValidation/UserValidation.js')

Router.post('/signUp', async (req, res) => {

    //validating data

    const {error} = validateSignUp(req.body)
    if (error){
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: error.details[0].message
        })
    }



    // checking if there already an user

    const checkUser = await db.query('SELECT * from users where user_correo = $1', [req.body.correo])

    if (checkUser.rowCount > 0){
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: 'Usuario ya registrado'
        })
    }

    // creating the new user
    const saltRounds = 10
    bcrypt.hash(req.body.contraseña, saltRounds)
        .then(async hash=>{
        const newUser = await db.query('INSERT INTO users (user_nombre, user_apellido, user_correo, user_contraseña, user_edad, user_colegio, user_foto_perfil) values ($1, $2, $3, $4, $5, $6, $7) returning *', [req.body.nombre, req.body.apellido, req.body.correo, hash, req.body.edad, req.body.colegio, req.body.imagePath])
        if (newUser.rowCount === 0){
            return res.status(500).json({
                statusRequest: 'failed',
                errorInfo: 'No se pudo completar el registro de usuario.'
            })
        }
        return res.status(201).json({
            statusRequest: 'ok'
        })
    })
        .catch(error=>{
            return res.status(400).json({
                statusRequest: 'failed',
                errorInfo: error.message
            })
        })

})

Router.post('/SignIn', async (req, res) => {

    //validating data

    const {error} = validateSignIn(req.body)

    if (error){
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: error.details[0].message
        })
    }

    // checking if the user exits

    const checkUser = await db.query('SELECT * from users where user_correo = $1', [req.body.correo])

    if (checkUser.rowCount === 0){
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: 'No hemos encontrado ninguna cuenta asociada con ese correo.'
        })
    }

    // sign-in the user

    bcrypt.compare(req.body.contraseña, checkUser.rows[0].user_contraseña).then(result=>{
        if (result){
            return res.status(200).json({
                statusRequest: 'ok',
                userInfo: checkUser.rows
            })
        }
        else {
            return res.status(400).json({
                statusRequest: 'failed',
                errorInfo: 'Usuario o contraseña incorrectos.'
            })
        }
    }).catch(error=>{
        return res.status(400).send(error.message)
    })


})

// get user reviews

Router.get('/reviews/:id', async (req, res)=>{

    try{

        const allReviews = await db.query('Select * from reviews where id=$1', [req.params.id])

        if (allReviews.rowCount === 0){
            
            return res.status(200).json({
                statusRequest: 'ok',
                reviewsInfo: 'Sin comentarios.'
            })
            
        }
        
        return res.status(200).json({
            statusRequst: 'ok',
            reviewsInfo: allReviews.rows 
        })

    }catch(error){
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: error.message
        })
    }
})

Router.post("/reviews/:id", async (req, res) => {
    try{
        const response = await db.query('INSERT INTO reviews (trabajador_id,user_id,review,review_rating) VALUES($1,$2,$3)', [req.body.id,req.body.review,req.body.rating])

        return res.status(201).json({
            statusRequest: 'ok'
        })
    }
    catch(error){
        
       return res.staus(400).json({
           statusRequest: 'failed',
           errorInfo: error.message
       }) 
    }
})


// Create user reviews


module.exports = Router;