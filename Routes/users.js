const Router = require('express').Router()
const db = require("../DB")
const bcrypt = require('bcryptjs')
const {validateSignUp, validateSignIn} = require('../UserValidation/UserValidation.js')

Router.post('/signUp', async (req, res) => {

    //validating data

    const {error} = validateSignUp(req.body)
    if (error){
        console.log(error)
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
            errorInfo: 'Correo ya registrado'
        })
    }


    // creating the new user
    const saltRounds = 10
    bcrypt.hash(req.body.password, saltRounds)
        .then(async hash=>{
        const newUser = await db.query('INSERT INTO users (user_nombre, user_apellido, user_correo, user_password ,user_celular) values ($1, $2, $3, $4, $5) returning *', [req.body.nombre, req.body.apellido, req.body.correo, hash, req.body.celular])
        if (newUser.rowCount === 0){
            return res.status(500).json({
                statusRequest: 'failed',
                errorInfo: 'No se pudo completar el registro'
            })
        }
        return res.status(201).json({
            statusRequest: 'ok',
            userInformation: newUser.rows[0]
        })
    })
        .catch(error=>{
            return res.status(400).json({
                statusRequest: 'failed',
                errorInfo: error.message
            })
        })

})

Router.post('/signIn', async (req, res) => {

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
        console.log("akak")
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: 'No hemos encontrado ninguna cuenta asociada con ese correo.'
        })
    }

    // sign-in the user

    bcrypt.compare(req.body.password, checkUser.rows[0].user_password).then(result=>{
        if (result){
            return res.status(200).json({
                statusRequest: 'ok',
                userInfo: checkUser.rows
            })
        }
        else {
            return res.status(400).json({
                statusRequest: 'failed',
                errorInfo: 'Contraseña incorrecta.'
            })
        }
    }).catch(error=>{
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: 'Contraseña incorrecta'
        })
    })


})

// get user reviews

Router.get('/reviews/:id', async (req, res)=>{




    try{
        console.log("doing..")
        const allReviews = await db.query('SELECT Users.user_nombre,Users.user_apellido,Users.user_id ,Reviews.review,Reviews.review_rating,Reviews.review_id from Reviews inner join Users on Users.user_id = Reviews.user_id where Trabajador_id = $1;', [req.params.id])

        if (allReviews.rowCount === 0){
            
            return res.status(200).json({
                statusRequest: 'ok',
                reviewsInfo: 'Sin comentarios.'
            })
            
        }
        
        return res.status(200).json({
            statusRequst: 'ok',
            reviewsInfo: allReviews.rows,
        })

    }
    catch(error){
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: error.message
        })
    }
})

// Create user reviews

Router.post("/reviews/:id", async (req, res) => {
    try{
        const checkReview = await db.query('select * from reviews where trabajador_id =$1 and user_id = $2;',[req.params.id,req.body.user_id])
        if (checkReview.rowCount !== 0) {
            return res.status(201).json({
                statusRequest: 'yaTieneReseña',
                reviewInfo: "Solo se puede tener una reseña por trabajador"
            })
        }



        const response = await db.query('INSERT INTO reviews (trabajador_id,user_id,review,review_rating) VALUES($1,$2,$3,$4) returning *', [req.params.id,req.body.user_id,req.body.review,req.body.rating])
        return res.status(201).json({
            statusRequest: 'ok',
            reviewInfo: response.rows[0]
        })
    }
    catch(error){
        console.log(error)
       return res.status(400).json({
           statusRequest: 'failed',
           errorInfo: error.message
       }) 
    }
})

//Delete review

Router.delete("/reviews/:id", async (req, res) => {
    console.log("jsjsjsjsjsjjsjsjsjj")
    try{
        const response = await db.query('delete from reviews where review_id = $1 returning *',[req.params.id])

        return res.status(200).json({
            statusRequest: 'ok',
            deletedInfo: response.rows[0]
        })

    }
    catch(error){
        return res.status(400).json({
            statusRequest:'failed',
            errorInfo: error.message
        })
    }
})






module.exports = Router;