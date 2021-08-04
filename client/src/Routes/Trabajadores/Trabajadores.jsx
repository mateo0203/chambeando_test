import React, {useEffect, useContext, useState} from "react";
import {TrabajadoresContext} from "../../Context/Context";
import api from "../../API/api";
import profilePhoto from "../Home/profilePhoto.png";
import {useHistory} from "react-router-dom"
import uniqid from "uniqid";
const Trabajadores = ()=>{
    const history = useHistory()
    const {trabajadores, setTrabajadores} = useContext(TrabajadoresContext)
    const [profesiones, setProfesiones ] = useState([])
    const [defaultProfesiones, setDefaultProfesiones] = useState([])
    const [search, setSearch] = useState("")
    const [searchOptions, setSearchOptions] = useState([])
    useEffect(()=>{
        const Trabajadores = async ()=>{
            const trabajadores = await api.get("/workers")
            setTrabajadores(trabajadores.data.data.workers)
        }
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
        defaultProfesiones()
        profesiones()
        Trabajadores()
    },[])
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
    return(
        <div className="Workers" onClick={hideSearchMenu}>
            <div className="presentacion-slogan">
                <div className="presentacion-content">
                    <h2 id="ayuda">¿En qué necesitas ayuda?</h2>
                    <br/>
                    <div className="search">
                        <div className="search-input" onClick={showSearchMenu}>
                            <i className="fas fa-search" id="search"/>
                            <input type="text" placeholder="Necesita ayuda de un..." autoComplete="off" id="input" value={search} onChange={handleChangeInput}/>
                        </div>
                    </div>
                    <div className="displayOptions" id="displayOptions">
                        {
                            searchOptions.length === 0 || search.length === 0 ?
                                defaultProfesiones.map(option=>{
                                    return (
                                        <div key={uniqid(option.profesion)} onClick={()=> handleSelectOption(option.profesion)}>
                                            <div className="defaultOptions">
                                                <h2>{option.profesion}</h2>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                searchOptions.map(option =>{
                                    return (
                                        <div className="option" key={uniqid(option.profesion)} onClick={()=>handleSelectOption(option.profesion)}>
                                            <h2>{option.profesion}</h2>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
            <div className="seccion-destacados">
                <h2 id="NuestrosTrabajadores">Nuestros trabajadores:</h2>
                <div className="trabajadores-destacados">
                    {
                        trabajadores.map(trabajador=>{
                            return (
                                <div key={trabajador.trabajador_id} className="trabajador-destacado">
                                    <div className="profile">
                                        <div className="profileImage">
                                            <img src={trabajador.image ? trabajador.image : profilePhoto} alt="profilePhoto"/>
                                        </div>
                                        <div className="presentacion-trabajador">
                                            <h2>{trabajador.nombre} {trabajador.apellidos}</h2>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="descripcion">
                                        <p>Servicio: {trabajador.profesion == "Técnico de electrodomésticos" ? "Técnico" : trabajador.profesion}</p>
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
export default Trabajadores;