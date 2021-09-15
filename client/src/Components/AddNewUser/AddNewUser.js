import React from 'react';
import Axios from 'axios';
import api from '../../API/api';
import { response } from 'express';

const AddNewUser = () =>{
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [usuario, setUsuario]
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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleSubmit = async () =>{
        try{
            const response = api.post("/users/signUp",{
                "nombre" : nombre,
                "apellido" : apellido,
                "usuario" : usuario,
                "password" : password,
                "dni" : dni,
                "email" : email,
                "celular" : celular
            })
        }
        catch(err){
            console.log(err)
        }
        if (response.data.status == "Created"){
            window.alert("Usuario Creado")
        }
    }

    return(
        <div className="addNewUser">
            <form>

                <label htmlFor="nombre">Nombre</label>
                <input type="text" value={nombre} placeholder="Nombre" name="nombre" onChange={handleNombre}/>

                <label htmlFor="apellido">Apellido</label>
                <input type="text" value={apellido} placeholder="Apellido" name="apellido" onChange={handleApellido}/>

                <label htmlFor="usuario">Usuario</label>
                <input type="text" value={usuario} placeholder="Nombre de Usuario" name="usuario" onChange={handleUsuario}/>

                <label htmlFor="password">Contraseña</label>
                <input type="text" value={password} placeholder="Contraseña" name="password" onChange={handleClave}/>

                <label htmlFor="dni">DNI</label>
                <input type="text" value={dni} placeholder="DNI" name="dni" onChange={handleDni}/>

                <label htmlFor="email">Correo Electrónico</label>
                <input type="text" value={email} placeholder="Correo Electrónico" name="email" onChange={handleEmail}/>

                <label htmlFor="celular">Celular</label>
                <input type="text" value={celular} placeholder="Número de celular" name="celular" onChange={handleCelular}/>

                <button onClick={handleSubmit}>Crea el Usuario</button>
            </form>
        </div>
    )

};

export default AddNewUser;