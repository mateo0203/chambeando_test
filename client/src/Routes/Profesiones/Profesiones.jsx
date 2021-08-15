import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import profilePhoto from "../Home/profilePhoto.png";
import {useHistory, useParams} from "react-router-dom";
import api from "../../API/api";
import ReactGA from 'react-ga';

const Profesiones = (props)=>{
    const history = useHistory()
    const [trabajadores,setTrabajadores] = useState([])
    const [profesiones, setProfesiones ] = useState([])
    const [defaultProfesiones, setDefaultProfesiones] = useState([])
    const [search, setSearch] = useState("")
    const [searchOptions, setSearchOptions] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const profesiones = async ()=>{
            try {
                const profesiones = await api.get("/workers/profesiones")
                setProfesiones(profesiones.data.data.profesion)
            }catch (e) {
                console.log(e.message)
            }
        }
        const defaultProfesiones = async ()=>{
            try {
                const defaultProfesiones = await api.get("/workers/profesionesdestacadas")
                setDefaultProfesiones(defaultProfesiones.data.data.profesionesDestacadas)
            }catch (e) {
                console.log(e.message)
            }
        }
        const Trabajadores = async () =>{
            try{
                const trabajadores = await api.get(`/workers/orderby/${id.includes("ñ")?id.replace("ñ", "¤"):id}`)
                setTrabajadores(trabajadores.data.data.filterWorkers)
            }catch (e) {
                console.log(e.message)
            }

        }
        defaultProfesiones()
        profesiones()
        Trabajadores()
    },[props])

    const handleTrabajadorInfo = (id)=>{
        history.push(`/trabajadores/${id}`)
    }
    const handleChangeInput = (event) =>{
        setSearch(event.target.value)
        const filterProfesion = profesiones.filter(profesion=>{
            return profesion.profesion.toLowerCase().includes(search.toLowerCase())
        })
        setSearchOptions(filterProfesion)
    }
    const hideSearchMenu = () =>{
        document.getElementById("displayOptions").style.display = "none"
    }
    const showSearchMenu = (event)=>{
        document.getElementById("displayOptions").style.display = "block"
        selectInput()
        event.stopPropagation()
    }
    const handleSelectOption = (id)=>{
        history.push(`/servicios/${id}`)
    }
    const selectInput = () =>{
        const input = document.getElementById('input');
        input.select()
    }
    const handleProfesion = (profesion) => {
        ReactGA.event({category:'Click en Profesión',action:`${profesion}`})
    }

    return(
        <div className="Workers" onClick={hideSearchMenu}>
            <div className="presentacion-slogan">
                <div className="presentacion-content">
                    <h2 id="ayuda">¿EN QUE NECESITAS AYUDA?</h2>
                    <br/>
                    <div className="search">
                        <div className="input-search" onClick={showSearchMenu}>
                            <i className="fas fa-search" id="search"/>
                            <input type="text" placeholder="¿En qué necesita ayuda?" id="input" value={search} onChange={handleChangeInput}/>
                        </div>
                    </div>
                    <div className="displayOptions" id="displayOptions">
                        {
                            searchOptions.length === 0 || search.length === 0 ?
                                defaultProfesiones.map(option=>{
                                    return (
                                        <div key={uniqid(option.profesion)} onClick={()=> handleSelectOption(option.profesion)}>
                                            <div className="defaultOptions">
                                                <h2 onClick={() => handleProfesion(option.profesion)}>{option.profesion}</h2>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                searchOptions.map(option =>{
                                    return (
                                        <div className="option" key={uniqid(option.profesion)} onClick={()=>handleSelectOption(option.profesion)}>
                                            <h2 onClick={() => handleProfesion(option.profesion)}>{option.profesion}</h2>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
            <div className="seccion-destacados">
                <h2 id="Resultado">Resultados para {id}:</h2>
                <div className="trabajadores-destacados">
                    {
                        trabajadores.map(trabajador=>{
                            return (
                                <div key={trabajador.trabajador_id} className="trabajador-destacado">
                                    <div className="profile">
                                        <div className="profileImage">
                                            <img src={trabajador.image} alt="profilePhoto"/>
                                        </div>
                                        <div className="presentacion-trabajador">
                                            <h2>{trabajador.nombre} {trabajador.apellidos}</h2>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="descripcion">
                                        <p>Teléfono: {trabajador.telefono}</p>
                                    </div>
                                    <div className="ver-info">
                                        <button type="submit" onClick={()=>handleTrabajadorInfo(trabajador.trabajador_id)}>VER MÁS INFO</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Profesiones;