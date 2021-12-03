import React from 'react'
import { useState } from 'react'
import api from '../../API/api';
import { useHistory } from 'react-router';


const ForgotPassword = () => {

    const history = useHistory()
    const [correo,setCorreo] = useState("")
    

    const handleCorreo= (e) =>
    {
        setCorreo(e.target.value)
    }

    const handleResponse = async (e) => 
    {
        e.preventDefault()
        try{
            const response = await api.post("/users/forgotPassword",{
                correo:correo
            })
            if(response.data.statusRequest == 'ok'){
            window.alert("El correo fue enviado")
            history.push("/")
            }
            if(response.data.statusRequest == 'failed'){
                window.alert("No existe un usuario con ese correo")
                }
        }
        catch(error){
            window.alert(error)
            console.log(error)
        }
    }
    return (
        <div>
        <form className="forgotPassword">
            <input id="email2" type="text" placeholder="Escribe tu Correo" name="correo" value={correo} onChange={handleCorreo}/>
            <input type="submit" id="submitEmail" onClick={handleResponse}/>
        </form>
        </div>
    )

}

export default ForgotPassword;