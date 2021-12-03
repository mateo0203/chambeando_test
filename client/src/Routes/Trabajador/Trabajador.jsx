import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import api from "../../API/api";
import profilePhoto from "../Home/profilePhoto.png";
import AddReview from "../../Components/AddNewReview/AddNewReview";
import uniqid from "uniqid";
import ReactGA from 'react-ga';
import { useContext } from "react";
import { TrabajadoresContext } from "../../Context/Context";
import StarRating from "../../Components/starRating.jsx/starRating";

const Trabajador = ()=>{
    const {userInfo} = useContext(TrabajadoresContext)
    let {id} = useParams();
    const [trabajadorInfo, setTrabajadorInfo] = useState([])
    const [reviews, setReviews] = useState([])
    
    

    useEffect(()=>{
        const getInfo = async ()=>{
            try{
                const info = await api.get(`/workers/worker/${id}`)
                setTrabajadorInfo(info.data.data.worker)
            }catch (e) {
                console.log(e.message)
            }
            try{
                const response = await api.get(`/users/reviews/${id}`)
                if (response.data.reviewsInfo != 'Sin comentarios.'){
                    setReviews(response.data.reviewsInfo)
                }
            }
            catch(e) {
                console.log(e)
            }
        }
        getInfo()
    }, [])

    const handleDelete = async (id) =>
    {
        try{
        const response = await api.delete("/users/reviews/"+id)
        console.log(response.data.deletedInfo)
        window.location.reload()
        }
        catch(err){
            console.log(err)
        }
    }


   const handleClick = (nombre,apellido) => {
        ReactGA.event({category:'Mensaje de whatsapp a trabajador',action:`${nombre} ${apellido}`})
       alert(`Después del trabajo porfa déjale una valoración y/o comentario a ${nombre} con el link de abajo, gracias!`)
       
    }
    return(
        <div className="Contenedor">    
            {
                trabajadorInfo.map(trabajador=>{
                    const mensajeWhatsapp = `Hola señor ${trabajador.nombre} encontré su número en la plataforma chambeando.pe y le escribo para cotizar un servicio. `

                    return (
                        <div key={uniqid(trabajador.trabajador_id)} className="trabajadorInfo">
                            <img src={trabajador.image ? trabajador.image : profilePhoto} alt="profilePhoto"/>
                            <div className="presentacionTrabajador">
                                <h2>{trabajador.nombre} {trabajador.apellidos}</h2>
                              
                                <h3>Teléfono: {trabajador.telefono}</h3>
                              
                                <h3 onClick={() => handleClick(trabajador.nombre, trabajador.apellidos)}>
                                  
                                    <a href={`https://api.whatsapp.com/send?phone=51${trabajador.telefono}&text=${mensajeWhatsapp}`}>Mándale un whatsapp haciendo click aquí</a>

                                </h3>       
                                <h4>Profesiones: {trabajador.profesiones.map(profesion=>{return profesion.includes('ñ')?`${profesion.replace('ñ', '¤')} `:`${profesion} ` })}</h4>
                                <h4>Conoce más a {trabajador.nombre}:</h4>
                                <p>{trabajador.descripcion}</p>
                            </div>
                        </div>            
                    )
                })
            }
            {/* <h2 id="contact-message">¡Contacta con un solo click!</h2> */}

            <AddReview/>

                {
                    reviews  ?
                    <div id="todo_review">
                    {reviews.map(review => {
                        return(    
                        <div id="Review">
                            <StarRating rating={review.review_rating}/>

                            <h1>{review.user_nombre} {review.user_apellido}</h1>
                            <p>{review.review}</p>
                            {
                                review.user_id === userInfo.user_id && <button onClick={() => handleDelete(review.review_id)} style={{margin:'30px 20px 10px 100px'}}>Eliminar comentario</button>
                            }
                        </div>
                        )
                    })}    
                    </div>     
                    :
                    <h1>Sin comentarios.</h1>
                    
                    }
            </div>
    )
}
export default Trabajador;