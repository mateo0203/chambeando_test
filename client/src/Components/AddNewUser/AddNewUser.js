import api from '../../API/api';
import {useState}  from 'react'
import { useHistory } from 'react-router'; 

const AddNewUser = () =>{
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [password, setPassword] = useState("")
    const [correo, setCorreo] = useState("")
    const [celular, setCelular] = useState("")
    const history = useHistory()

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }
    
    const handleApellido = (e) => {
        setApellido(e.target.value)
    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleCorreo = (e) => {
        setCorreo(e.target.value)
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
                "password" : password,
                "correo" : correo,
                "celular" : celular
            }
            
            const response = await api.post("/users/signUp", userInfo)

            if (response.data.statusRequest == 'ok'){
                localStorage.setItem("userInfo", JSON.stringify(response.data.userInformation))
                window.alert("Te has registrado e iniciado sesión correctamente!")
                history.push("/")
                window.location.reload()
            }
        }
        catch(err){
            window.alert("Hubo un error con tu registro. ¡Intenta denuevo! Ten en cuenta que la contraseña tiene que tener entre 7 y 30 caracteres. Tienes que poner un correo válido y un celular válido")
        }
    
    }

    return(
        <div>
            <form id='registro-nuevoUsuario'>

                <label htmlFor="nombre">Nombre</label>
                <input type="text" value={nombre} placeholder="Nombre" name="nombre" onChange={handleNombre}/>
                <label htmlFor="apellido">Apellido</label>
                <input type="text" value={apellido} placeholder="Apellido" name="apellido" onChange={handleApellido}/>

                <label htmlFor="password">Contraseña</label>
                <input type="password" value={password} placeholder="Contraseña" name="password" onChange={handlePassword}/>

                <label htmlFor="email">Correo Electrónico</label>
                <input type="text" value={correo} placeholder="Ejemplo: usuario@gmail.com" name="correo" onChange={handleCorreo}/>

                <label htmlFor="celular">Celular</label>
                <input type="text" placeholder="Ejemplo: 999999999" value={celular} name="celular" onChange={handleCelular}/>

                <button onClick={handleSubmit} size='lg' variant="dark">Crea el Usuario</button>
            </form>
        </div>
    )

};

export default AddNewUser;