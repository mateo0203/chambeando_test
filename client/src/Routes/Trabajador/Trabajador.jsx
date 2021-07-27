import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import api from "../../API/api";
import profilePhoto from "../Home/profilePhoto.png"
import uniqid from "uniqid"


const Trabajador = ()=>{
    let {id} = useParams();
    const [trabajadorInfo, setTrabajadorInfo] = useState([])
    useEffect(()=>{
        const getInfo = async ()=>{
            try{
                const info = await api.get(`/workers/worker/${id}`)
                setTrabajadorInfo(info.data.data.worker)
            }catch (e) {
                console.log(e.message)
            }
        }
        getInfo()
    }, [])

    return(
        <div className="Contenedor">
        <div className="Trabajador">
            {
                trabajadorInfo.map(trabajador=>{
                    return (
                        <div key={uniqid(trabajador.trabajador_id)} className="trabajadorInfo">
                            <img src={trabajador.image} alt="profilePhoto"/>
                            <div className="presentacionTrabajador">
                                <h2>{trabajador.nombre} {trabajador.apellidos}</h2>
                                <h3>Teléfono: {trabajador.telefono}</h3>
                                <h3><a href={`https://api.whatsapp.com/send?phone=51${trabajador.telefono}&text=${`Hola señor ${trabajador.nombre} encontré su número en la plataforma chambeando.pe y le escribo para cotizar un servicio. `}`}>Mándale un whatsapp haciendo click aquí</a></h3>
                                <h3>Profesion: {trabajador.profesion}</h3>
                                <h3>Conoce más a {trabajador.nombre}:</h3>
                                <p>{trabajador.descripcion}</p>
                                <h3 id="valora"><a href={`https://api.whatsapp.com/send?phone=51941461510&text=La valoracion de ${trabajador.nombre} es: `}>Valora a {trabajador.nombre} dando click aquí</a></h3>
                            </div>
                        </div>            
                    )
                })
            }
            <h2 id="contact-message">¡Contacta con un solo click!</h2>
        </div>
        </div>
    )
}
export default Trabajador;