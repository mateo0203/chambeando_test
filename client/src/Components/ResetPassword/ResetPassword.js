import React, { useState, useEffect, useContext } from 'react' 
import api from '../../API/api'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'


const ResetPassword =  () =>  {

    const history = useHistory()
    const [contraseña,setContraseña] = useState("")
    const [confirmarContraseña,setConfirmarContraseña] = useState("")
    const {id} = useParams()

    const handleContraseña = (e) => {
        setContraseña(e.target.value)
    }

    const handleConfirmarContraseña = (e) => {
        setConfirmarContraseña(e.target.value)    
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(contraseña == confirmarContraseña)
            {
                const response = await api.post("/users/resetPassword/"+ id,{
                password:contraseña
                })
                if (response.data.statusRequest == 'ok')
                {
                    window.alert('Has cambiado tu contraseña correctamente!')
                    history.push("/login")
                }
                if (response.data.statusRequest == "failed")
                {
                    window.alert(response.data.errorInfo)
                }
            }
            else{
                window.alert("Las contraseñas no son iguales")
            }
    }
    catch(err){
        window.alert("Hubo un error")
        console.log(err)

    }
    }
    



    return (
            <div>
            <form id="login-usuario">

                <div>
                <label htmlFor="contraseña">Contraseña</label>
                 <input class='input_not_submit' type="password" value={contraseña} placeholder="Escriba su nueva contraseña" onChange={handleContraseña}/>
                </div>

                <div>
                <label htmlFor="contraseña">Confirmar contraseña</label>
                    <input class='input_not_submit' type="password" value={confirmarContraseña} placeholder="Confirme su contraseña" onChange={handleConfirmarContraseña}/>
                </div>

                <div className="submitLine">
                    <input class="submit" type="submit" value="Cambia tu contraseña" onClick={handleSubmit}/>
                </div>
            </form>
        
            </div>
    )

}

export default ResetPassword;