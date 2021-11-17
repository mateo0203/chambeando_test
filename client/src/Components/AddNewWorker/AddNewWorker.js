import React, {useState} from "react";
import axios from "axios";
import api from "../../API/api";
import uniqid from "uniqid";

const AddNewWorker = ()=>{
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [dni, setDni] = useState("")
    const [telefono, setTelefono] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [profesion, setProfesion] = useState("")
    const [image, setImagen] = useState("")
    const [fileName, setFileName] = useState("Choose File")
    const [numberProfesiones,setNumberProfesiones] = useState("")
    const [state, setState] = useState(0)
    const [corchetes, setCorchetes] = useState([])
    const [profesiones, setProfesiones] = useState([])
    
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
    const handleSubmit = (e)=>{
        e.preventDefault()
        postNewWorker()
    }

    const handleFirstSubmit = (e) => {
        e.preventDefault()
        const nuevaArray = []
        const num = parseInt(numberProfesiones) + 1
        for (var i = 1; i < num; i++){
        nuevaArray.push(i)
        }
        setCorchetes(nuevaArray)
        setState(1)
}
const handleNumberProfesiones = (e) => {
    setNumberProfesiones(e.target.value)
}

const handleProfesion = (e)=>{
    setProfesion(e.target.value)
}

const handleProfesiones = (e) => {
    e.preventDefault()

    if (!profesiones.includes(profesion))
    {
    const remplazoProfesiones = profesiones
    remplazoProfesiones.push(profesion) 
    setProfesiones(remplazoProfesiones)
    window.alert(`Estas son las profesiones asignadas: ${profesiones}`)
    }
    else{
        window.alert("Ya asignaste esta profesion")
    }
}

    const postNewWorker = async ()=>{

        const formData = new FormData()
        formData.append('file', image)

        try{
            const image = api.post(`/admin/upload`, formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }catch (err){
            console.log(err)
        }


        const NewWorker = await api.post(`/admin/create`, {
            nombre,
            apellidos,
            dni,
            telefono,
            descripcion,
            profesiones,
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

                {
                    state == 0 ?
                    <form id="secondForm">
                        <input placeholder="Numero de profesiones" onChange={handleNumberProfesiones} type="number" value={numberProfesiones}/>
                        <input onClick={handleFirstSubmit} type="submit"/>
                    </form>
                    :
                <div>
                {
                    corchetes.map(corchete => {
                        return (
                        <div>  
                            <label htmlFor= {`profesion ${corchete} `}> {`Profesion ${corchete} `}</label>
                            <input type="text" name={`profesion ${corchete} `} placeholder={`profesion ${corchete} `} onChange={handleProfesion}/>
                            <button id={`profesion ${corchete} `} onClick={handleProfesiones}> 
                            Set {`profesion ${corchete} `}</button>
                        </div>)
                    })
                }
                </div>
                }                
            
               
                
                
                <label htmlFor="input">{fileName}</label>
                <input type="file" name="input" onChange={onchangeName}/>
                <button onClick={handleSubmit}>Crear nuevo Trabajador</button>
            </form>

        </div>
    )
}

export default AddNewWorker;