// importing packages and files

const express = require("express");
const cors = require("cors")
require("dotenv").config()
const path = require("path")
const trabajadores = require("./Routes/trabajadores")
const admin = require("./Routes/admin")
const fileUpload = require("express-fileupload")

//setting-up APP

const app = express();

app.use(fileUpload({
    limits: {fileSize: 10 * 1024 *1024}
}))
app.use(cors());
app.use(express.json());
app.use("/api/v1/workers", trabajadores)
app.use("/api/v1/admin", admin)

// rendering front-end in the express server

app.use(express.static(path.join(__dirname, "build")))
app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

// running the APP

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`)
})






