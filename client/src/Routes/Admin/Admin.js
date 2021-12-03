import React, {useState} from "react";
import axios from "axios";
import api from "../../API/api";
import "./Admin.css"
import AddNewWorker from "../../Components/AddNewWorker/AddNewWorker";
const Admin = ()=>{
    const [permission, setPermission] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(1)

    const mail = "mateo@gmail.com"
    const contraseña = "larry"

    const onClickForm = (e)=>{ 
        e.preventDefault()
        console.log(email) 
        if (email == mail && password == contraseña){
            setStatus(2)
        }
    }

    const validateData = async ()=>{
        const validate = await api.post(`/admin/login`, {
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
        {
        status === 1 ?
            <div className="form" id="form">
          <div> 
            <form>
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" required placeholder="Email" value={email} onChange={handleEmailChange}/>
                <label htmlFor="Pass">Contraseña</label>
                <input type="password" name="Pass" placeholder="Contraseña" required value={password} onChange={handlePasswordChange}/>
                <input type="submit" value="login" onClick={onClickForm}/>
            </form>
           </div>
           </div>
        :
            <AddNewWorker/> 
        }
        </div>
    )
}

export default Admin;