const router = require("express").Router()
const db = require("../DB")
//const bcrypt = require("bcrypt")


router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body
        // check if email exist
        const adminInfo = await db.query("SELECT * FROM admin WHERE admin_email=$1", [email])
        if (adminInfo.rows.length === 0){
            res.status(400).json({
                permission: "denied"
            })
        }
        else{
            bcrypt.compare(password, adminInfo.rows[0].admin_password, function (err, result) {
                if (result){
                    res.status(201).json({
                            permission: "okay"
                        }
                    )
                }
            })
        }
    }catch (e) {
        res.json({
            permission: e.message
        })
    }

})

router.post("/signup", (req, res) => {
    const saltRounds = 10;
    const {email, password} = req.body
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash){
            const newAdmin = await db.query("INSERT INTO admin (admin_email, admin_password) VALUES ($1, $2) returning *",[email, hash])
            res.status(201).json({
                signup: "SignUp",
                data:{
                    adminInfo: newAdmin.rows
                }

            })
        })
    })
})


router.post("/create", async (req, res)=>{
    // terminar upload file 
    const {nombre, apellidos, dni, telefono, descripcion, profesion, fileName} = req.body
    let filePath = ""
    if (fileName === null){
        filePath = `/uploads/profilePhoto.png`
    }
    else {
        filePath = `/uploads/${fileName}`
    }

    try{
        const newWorker = await db.query("INSERT INTO trabajadores (nombre, apellidos, dni, telefono, descripcion, profesion, image) values ($1, $2, $3, $4, $5, $6, $7)", [nombre, apellidos, dni, telefono, descripcion, profesion, filePath])
        const searchValue = await db.query("UPDATE profesiones set counter=counter+1 where profesion=$1", [profesion])

        if (searchValue.rowCount === 0){
            const newProfesion = await db.query("INSERT INTO profesiones (profesion) values ($1)", [profesion])
        }

        res.status(201).json({
            status: "created",
        })
    }catch (e) {
        res.status(400).json({
            e: e.message
        })
    }
})

router.post("/upload", (req, res)=>{
    if (req.files === null){
        return res.status(400).json({msg: "No file uploaded"})
    }
    const file = req.files.file

    file.mv(`../client/public/uploads/${file.name}`, err =>{
        if (err){
            console.log(err)
            return res.status(500).send(err)
        }

        res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
    })


})

module.exports = router;