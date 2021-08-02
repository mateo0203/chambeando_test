import React, {useState} from "react";
import axios from "axios";
const AddNewWorker = ()=>{
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [dni, setDni] = useState("")
    const [telefono, setTelefono] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [profesion, setProfesion] = useState("")
    const [image, setImagen] = useState("")
    const [fileName, setFileName] = useState("Choose File")


    const onchangeName = (e)=>{
        setImagen(e.target.files[0])
        setFileName(e.target.files[0].name)
    }


    const handleNombre = (e)=>{
        setNombre(e.target.value)
    }
    const handleApellidos = (e)=>{
        setApellidos(e.target.value)
    }
    const handleDNI = (e)=>{
        setDni(e.target.value)
    }
    const handleTelefono = (e)=>{
        setTelefono(e.target.value)
    }
    const handleDescripcion = (e)=>{
        setDescripcion(e.target.value)
    }
    const handleProfesion = (e)=>{
        setProfesion(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        postNewWorker()
    }

    const postNewWorker = async ()=>{

        const formData = new FormData()
        formData.append('file', image)

        const url = "https://chambeando.pe"

        try{
            const image = axios.post(`${url}/api/v1/admin/upload`, formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }catch (err){
            console.log(err)
        }


        const NewWorker = await axios.post(`${url}/api/v1/admin/create`, {
            nombre,
            apellidos,
            dni,
            telefono,
            descripcion,
            profesion,
            fileName
        })
        if (NewWorker.data.status === "created"){
            window.alert("El trabajador fue correctamente creado")
        }

    }
    return (
        <div className="addNewUser">
            <form>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" value={nombre} name="nombre" placeholder="nombre" onChange={handleNombre}/>
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" value={apellidos} name="apellidos" placeholder="apellidos" onChange={handleApellidos}/>
                <label htmlFor="dni">DNI</label>
                <input type="text" value={dni} name="dni" placeholder="DNI" onChange={handleDNI}/>
                <label htmlFor="telefono">Telefono</label>
                <input type="text" value={telefono} name="telefono" placeholder="Telefono" onChange={handleTelefono}/>
                <label htmlFor="Descripcion">Descripcion</label>
                <input type="text" value={descripcion} name="descripcion" placeholder="Descripcion" onChange={handleDescripcion}/>
                <label htmlFor="Profesion">Profesion</label>
                <input type="text" value={profesion} name="profesion" placeholder="Profesion" onChange={handleProfesion}/>
                <label htmlFor="input">{fileName}</label>
                <input type="file" name="input" onChange={onchangeName}/>
                <button onClick={handleSubmit}>Crear nuevo Trabajador</button>
            </form>

        </div>
    )
}

export default AddNewWorker;