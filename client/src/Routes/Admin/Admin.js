import React, {useState} from "react";
import axios from "axios";
import "./Admin.css"
import AddNewWorker from "../../Components/AddNewWorker/AddNewWorker";
const Admin = ()=>{
    const [permission, setPermission] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(false)

    const onClickForm = (e)=>{
        e.preventDefault()
        validateData()
    }
    const validateData = async ()=>{
        const validate = await axios.post("Chambeando-env.eba-fe32cpvg.us-east-2.elasticbeanstalk.com/api/v1/admin/login", {
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

                        <AddNewWorker/>

            </div>

        </div>
    )
}

export default Admin;