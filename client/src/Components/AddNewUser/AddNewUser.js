import Axios from 'axios';
import api from '../../API/api';
import {useState}  from 'react'


const AddNewUser = () =>{
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState("")
    const [dni, setDni] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCelular] = useState("")

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }
    
    const handleApellido = (e) => {
        setApellido(e.target.value)
    }

    const handleUsuario = (e) => {
        setUsuario(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleDni = (e) => {
        setDni(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleCelular = (e) => {
        setCelular(e.target.value)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        try{

            const userInfo = {
                "nombre" : nombre,
                "apellido" : apellido,
                "usuario" : usuario,
                "password" : password,
                "dni" : dni,
                "email" : email,
                "celular" : celular
            }

            const response = api.post("/users/signUp", userInfo)
            window.alert('Pedro')
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
        }
        catch(err){
            console.log(err)
        }
    
    }

    return(
        <div>
            <form id='registro-nuevoUsuario'>

                <label htmlFor="nombre">Nombre</label>
                <input type="text" value={nombre} placeholder="Nombre" name="nombre" onChange={handleNombre}/>
                <label htmlFor="apellido">Apellido</label>
                <input type="text" value={apellido} placeholder="Apellido" name="apellido" onChange={handleApellido}/>

                <label htmlFor="usuario">Usuario</label>
                <input type="text" value={usuario} placeholder="Nombre de Usuario" name="usuario" onChange={handleUsuario}/>

                <label htmlFor="password">Contraseña</label>
                <input type="password" value={password} placeholder="Contraseña" name="password" onChange={handlePassword}/>

                <label htmlFor="dni">DNI</label>
                <input type="text" value={dni} placeholder="DNI" name="dni" onChange={handleDni}/>

                <label htmlFor="email">Correo Electrónico</label>
                <input type="text" value={email} placeholder="Correo Electrónico" name="email" onChange={handleEmail}/>

                <label htmlFor="celular">Celular</label>
                <input type="text" value={celular} placeholder="Número de celular" name="celular" onChange={handleCelular}/>

                <button onClick={handleSubmit} size='lg' variant="dark">Crea el Usuario</button>
            </form>
        </div>
    )

};

export default AddNewUser;