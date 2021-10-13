
// importing dependencies

const Router = require("express").Router()
const db = require("../DB")

// getting all the workers

Router.get("/", async (req, res) => {
    try{

        // getting all the workers from database

        const allWorkers = await db.query("SELECT * FROM trabajadores ORDER BY valoracion DESC")

        // checking if there are workers

        if (allWorkers.rowCount === 0){

            return res.status(400).json({
                statusRequest: 'failed',
                errorInfo: "Hubo un error! Vuelve a intentarlo."
            })

        }

        // sending all workers info

        return res.status(200).json({
            statusRequest: "ok",
            workersInfo: allWorkers.rows
        })
    }catch (error) {
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: "Hubo un error! Vuelve a intentarlo."
        })
    }
})

// getting the the best rated workers

Router.get("/best-rated", async (req, res)=>{
    try{

        // fetching best rated workers from database

        const bestRated = await db.query("SELECT * FROM trabajadores order by valoracion DESC limit 3")

        // checking if there are workers

        if (bestRated.rowCount === 0){
            return res.status(400).json({
                statusRequest: 'failed',
                errorInfo: "Hubo un error! Vuelve a intentarlo."
            })
        }

        // sending workers info

        return res.status(200).json({
            statusRequest: "ok",
            workersInfo: bestRated.rows
        })
    }catch (error) {
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: "Hubo un error! Vuelve a intentarlo."
        })
    }
})




// selecting workers by their profession

Router.get("/order-by/:profession", async (req, res)=>{
    try{

        // getting workers by their profession from database

        const filterWorkers = await db.query("SELECT * FROM trabajadores WHERE profesion = $1", [req.params.profession])

        // checking if there is workers info

        if (filterWorkers.rowCount === 0) {

            return res.status(400).json({
                statusRequest: 'ok',
                errorInfo: 'Hubo un error! Vuelve a intentarlo.'
            })

        }

        // sending workers info

        return res.status(200).json({
            status: "ok",
            workersInfo: filterWorkers.rows
        })
    }catch (error) {
        return res.status(400).json({
            statusRequest: 'ok',
            errorInfo: 'Hubo un error! Vuelve a intentarlo.'
        })
    }
})

// getting worker info

Router.get("/worker/:id", async (req, res)=>{
    try{

        // getting worker info from database

        const workerInfo = await db.query("SELECT * FROM trabajadores WHERE trabajador_id = $1", [req.params.id])

        // checking there is worker info

        if (workerInfo.rowCount === 0){
            return res.status(400).json({
                statusRequest: 'failed',
                errorInfo: 'Hubo un error! Vuelve a intentarlo.'
            })
        }

        // sending worker info

        return res.status(200).json({
            statusRequest: 'ok',
            workerInfo
        })
    }catch (error) {
        return res.status(400).json({
            statusRequest: 'failed',
            errorInfo: 'Hubo un error! Vuelve a intentarlo.'

        })
    }
})

// getting all the professions

Router.get("/professions", async (req, res)=>{
   try{

       // getting professions from database

        const allProfessions = await db.query("SELECT profesion from profesiones")

       // checking if there are professions

       if (allProfessions.rowCount === 0){
           return res.status(400).json({
               statusRequest: 'failed',
               errorInfo: 'Hubo un error! Vuelve a intentarlo.'
           })
       }

       // sending professions data

       return res.status(200).json({
           statusRequest: 'ok',
           professionsInfo: allProfessions.rows
       })

   } catch (error) {
       return res.status(400).json({
           statusRequest: 'failed',
           errorInfo: 'Hubo un error! Vuelve a intentarlo.'
       })
   }
})

// getting most featured professions

Router.get("/featured-professions", async (req, res)=>{
    try{

        // getting featured professions from database

        const featuredProfessions = await db.query("SELECT profesion from profesiones order by counter DESC limit 4")

        // checking if there are featured professions

        if (featuredProfessions.rowCount === 0){
            return res.status(400).json({
                statusRequest: 'failed',
                errorInfo: 'Hubo un error! Vuelve a intentarlo.'
            })
        }

        return res.status(200).json({
            statusRequest: 'ok',
            professionsInfo: featuredProfessions.rows
        })

    }catch (error) {
       return res.status(400).json({
           statusRequest: 'failed',
           errorInfo: 'Hubo un error! Vuelve a intentarlo.'
       })
    }
})

// exporting all the routes

module.exports = Router;