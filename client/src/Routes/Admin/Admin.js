import React, {useState} from "react";
import axios from "axios";
import "./Admin.css"
import AddNewWorker from "../../Components/AddNewWorker/AddNewWorker";
const Admin = ()=>{
    const [permission, setPermission] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(false)

    const mail = "mateo@gmail.com"
    const contraseña = "larry"

    const onClickForm = (e)=>{  
        if (email == mail && password == contraseña){
            setStatus(true)
        }
    }

    const url = "https://chambeando.pe"

    const validateData = async ()=>{
        const validate = await axios.post(`${url}/api/v1/admin/login`, {
            email,
            password
        })
        setPermission(validate.data.permission)
        if (permission === "okay"){
            setStatus(true)
        }
    }
    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    



    return(
        <div className="adminPanel">
            <div className="form" id="form">
           {status === false ?
           <div>
              <form>
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" required placeholder="Email" value={email} onChange={handleEmailChange}/>
                    <label htmlFor="Pass">Contraseña</label>
                    <input type="password" name="Pass" placeholder="Contraseña" required value={password} onChange={handlePasswordChange}/>
                    <button onClick={onClickForm}>Login</button>
               </form>
            </div>
            :
            <AddNewWorker/>
           }      
            </div>

        </div>
    )
}

export default Admin;