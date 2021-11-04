import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react' 
import api from '../../API/api'
import { useHistory } from 'react-router'
import { TrabajadoresContext } from "../../Context/Context"

const Login =  () =>  {
    const history = useHistory()

    const {userInfo} = useContext(TrabajadoresContext)
    [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [status,setStatus] = useState(1)
    const [userName, setUserName] = useState('')
    const [message,setMessage] = useState('')

    const handleEmail = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)    
    }

    const handleSubmit = async () => {
        try{
        const response = await api.post("users/SignIn",{
            correo:email,
            contraseña:password
        })
        if (response.status == 400) {
            setMessage(response.data.errorInfo)
        }
        else{
            setMessage("Iniciaste Sesión! Anda a la página de inicio.")
        }
    }
    catch(err){
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
            {
                status == 1 ?
            <form>
                <div>
                    <input type="text" value={userName} placeholder="Escriba su Correo Electrónico" onChange={handleEmail}/>
                </div>

                <div>
                    <input type="password" value={password} placeholder="Escriba su contraseña" onChange={handlePassword}/>
                </div>

                <div>
                    <input type="submit" onClick={handleSubmit}/>
                </div>
            </form>
        :
        <div>
            <button type="submit" onClick={handleRedirect}> {message} </button>
        </div>
            }
            </div>
    )

}

export default Login;