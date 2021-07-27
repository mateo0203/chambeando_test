const router = require("express").Router()
const db = require("../DB")

router.get("/", async (req, res) => {
    try{
        const allWorkers = await db.query("SELECT * FROM trabajadores ORDER BY valoracion DESC")
        res.status(200).json({
            status: "success",
            data: {
                workers: allWorkers.rows
            }
        })
    }catch (e) {
        res.status(400).send(e.message)
    }
})
router.get("/destacados", async (req, res)=>{
    try{
        const mejorValorados = await db.query("SELECT * FROM trabajadores order by valoracion DESC limit 3")
        res.status(200).json({
            status: "success",
            data: {
                mejorValorados: mejorValorados.rows
            }
        })
    }catch (e) {
        res.status(400).send(e.message)
    }
})
router.get("/orderby/:id", async (req, res)=>{
    try{
        const filterWorkers = await db.query("SELECT * FROM trabajadores WHERE profesion = $1", [req.params.id])
        if (filterWorkers.rows.length === 0) {
            return res.status(400).send("We don't found any records with that filter")
        }
        res.status(200).json({
            status: "success",
            data: {
                filterWorkers: filterWorkers.rows
            }
        })
    }catch (e) {
        res.status(400).send(e.message)
    }
})
router.get("/worker/:id", async (req, res)=>{
    try{
        const worker = await db.query("SELECT * FROM trabajadores WHERE trabajador_id = $1", [req.params.id])
        if (worker.rows.length === 0) {
            return res.status(400).send("Invalid worker id")
        }
        res.status(200).json({
            status: "success",
            data: {
                worker: worker.rows
            }
        })
    }catch (e) {
        res.status(400).send(e.message)
    }
})
router.get("/profesiones", async (req, res)=>{
   try{
        const allProfesiones = await db.query("SELECT profesion from profesiones")
        res.status(200).json({
            status: "success",
            data: {
                profesion: allProfesiones.rows
            }
        })
   } catch (e) {
       res.status(400).send(e.message)
   }
})
router.get("/profesionesdestacadas", async (req, res)=>{
    try{
        const profesionesDestacadas = await db.query("SELECT profesion from profesiones order by counter DESC limit 4")
        res.status(200).json({
            status: "success",
            data:{
                profesionesDestacadas: profesionesDestacadas.rows
            }
        })
    }catch (e) {
        res.status(400).send(e.message)
    }
})
module.exports = router;