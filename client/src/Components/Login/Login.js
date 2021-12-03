import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react' 
import api from '../../API/api'
import { useHistory } from 'react-router'
import { TrabajadoresContext } from "../../Context/Context"
import StarRating from '../starRating.jsx/starRating'
import { Link } from 'react-router-dom'

const Login =  () =>  {
    const history = useHistory()

    const {userInfo,setUserInfo} = useContext(TrabajadoresContext)
    const [correo,setCorreo] = useState("")
    const [password,setPassword] = useState("")


    const handleCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)    
    }

    const handleLink = () => {
        history.push("/forgotPassword")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
        const response = await api.post("users/signIn",{
            correo:correo,
            password:password
        })
        if (response.data.statusRequest == 'ok'){
            window.alert('Has iniciado sesión correctamente!')
            const userInformation = response.data.userInfo[0]
            localStorage.setItem("userInfo",JSON.stringify(userInformation))
            history.push("/")
            window.location.reload()
        }

    }
    catch(err){
        window.alert("contraseña o email incorrectos")
        console.log(err)

    }
    }
    
    const handleRedirect = () => {
        history.push("/")
    }


    useEffect(()=>{
        const validateUserInfo = ()=>{

        }
    }, [])

    return (
            <div>
            <form id="login-usuario">

                <div>
                <label htmlFor="email">Email</label>
                 <input class='input_not_submit' type="text" value={correo} placeholder="Escriba su Correo Electrónico" onChange={handleCorreo}/>
                </div>

                <div>
                <label htmlFor="contraseña">Contraseña</label>
                    <input class='input_not_submit' type="password" value={password} placeholder="Escriba su contraseña" onChange={handlePassword}/>
                </div>

                <div className="submitLine">
                    <input class="submit" type="submit" onClick={handleSubmit}/>
                    <p onClick={handleLink}>¿Te olvidaste tu contraseña? Recupérala</p>
                </div>
            </form>
        
            </div>
    )

}

export default Login;