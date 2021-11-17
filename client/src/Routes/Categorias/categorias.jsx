import React from 'react'
import { useEffect,useState } from 'react'
import api from '../../API/api'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import Footer from '../../Components/Footer/Footer'

const Categorias = () => {
    const [categorias, setCategorias] = useState([])
    const history = useHistory()    
    
     
    useEffect( async () => {
        try{
            const response = await api.get("/workers/profesiones")
            setCategorias(response.data.data.profesion)
            console.log(categorias)
        }
        catch(err){
            console.log(err)
        }
    },[])

    const handleClick = (profesion) => {
        history.push("/servicios/"+profesion)
    }
    return (
        <div className="hola">
            {categorias.map(categoria =>{
                return(
                    <h1 onClick={() => {handleClick(categoria.profesion)}}>{categoria.profesion}</h1>
                )
            })}
        </div >
    )

}

export default Categorias 