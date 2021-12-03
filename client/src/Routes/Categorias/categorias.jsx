import React from 'react'
import { useEffect,useState } from 'react'
import api from '../../API/api'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import Footer from '../../Components/Footer/Footer'

const Categorias = () => {
    const [categorias, setCategorias] = useState([])
    const [arrayCategorias, setArrayCategorias] = useState([])
    const history = useHistory()    
    
    useEffect( async () => {
        try{
            const response = await api.get("/workers/profesiones")
            if (response.data.status == "success"){
            setCategorias(response.data.data.profesion.map(categoria => {return categoria.profesion}).sort())
            }
            //setArrayCategorias(arrayCategorias.sort())
        }
        catch(err){
            console.log(err)
        }
    },[])

    const handleClick = (profesion) => {
        history.push("/servicios/"+profesion)
    }
    console.log(categorias)
    return (
        
        <div className="hola">
            {categorias.map(categoria =>{
                return(
                    <h1 onClick={() => {handleClick(categoria)}}>{categoria}</h1>
                )
            })}
        </div >
    )

}

export default Categorias 