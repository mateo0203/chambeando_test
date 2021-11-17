const router = require("express").Router()
const db = require("../DB")
const bcrypt = require("bcryptjs")


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
    const {nombre, apellidos, dni, telefono, descripcion, profesiones, fileName} = req.body
    let filePath = ""
    

    if (fileName === "Choose File"){
        filePath = `/uploads/profilePhoto.png`
    }
    else {
        filePath = `/uploads/${fileName}`
    }
    const profesionesString = `{${profesiones}}`
    try{

        const newWorker = await db.query("INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesiones,image) VALUES ($1, $2, $3, $4, $5, $6, $7);", [nombre, apellidos, dni, telefono, descripcion, profesionesString, filePath])

        profesiones.forEach( async profesion => {
            const searchValue = await db.query("UPDATE profesiones set counter=counter+1 where profesion=$1", [profesion])
    
            if (searchValue.rowCount === 0)
            {
                const newProfesion = await db.query("INSERT INTO profesiones (profesion) values ($1)", [profesion])
            }
            }
    
            )

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
        console.log("hola")
        return res.status(200).json({msg: "No file uploaded"})
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

router.delete("/delete/:id", async (req,res) => {
    try {
        const response = db.query("Delete from trabajadores where trabajador_id = $1 returning *",[req.params.id])

        const searchValue = await db.query("UPDATE profesiones set counter=counter-1 where profesion=$1 returning *", [response.rows[0].profesion])
        if (searchValue.rows[0].counter == 0){
            const borrar = db.query("delete from profesiones where profesion = $1",[response.rows[0].profesion])
        }
        res.status(200).json({
            statusRequest:'deleted',
            deletedInfo:response.rows[0]    
        })
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            statusRequest:'failed',
            errorInfo:error
        })
    }
})

module.exports = router;