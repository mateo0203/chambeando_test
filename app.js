const express = require("express");
const cors = require("cors")
require("dotenv").config()
const path = require("path")
const trabajadores = require("./Routes/trabajadores")
const admin = require("./Routes/admin")
const fileUpload = require("express-fileupload")

//app
const app = express();
//hshshshs
app.use(express.static(path.join(__dirname, "build")))
app.use(fileUpload())
app.use(cors());
app.use(express.json());
app.use("/api/v1/workers", trabajadores)
app.use("/api/v1/admin", admin)
app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
}) 
//start app
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`)
})






