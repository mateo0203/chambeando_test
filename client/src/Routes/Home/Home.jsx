import React, {useEffect, useState} from "react";
import profilePhoto from "./profilePhoto.png";
import api from "../../API/api";
import uniqid from "uniqid";
import {useHistory} from "react-router-dom";
import ReactGA from 'react-ga';
import { useContext } from "react";
import { TrabajadoresContext } from "../../Context/Context";
import Footer from "../../Components/Footer/Footer";

const Home = ()=>{
    const [trabajadoresDestacados, setTrabajadoresDestacados] = useState([])
    const [search, setSearch] = useState("")
    const [searchOptions, setSearchOptions] = useState([])
    const [profesiones,setProfesiones] = useState([])
    const [defaultProfesiones, setDefaultProfesiones] = useState([])
    const history = useHistory()
    const {userInfo} = useContext(TrabajadoresContext)

    const mensaje = "¡Hola! No encontré lo que estaba buscando en Chambeando.pe. Estoy buscando "
    const telefono = "941461510" 


    console.log(userInfo)

    useEffect(()=>{
        const trabajadoresDestacados = async () =>{
            try{
                const trabajadoresDestacados = await api.get("/workers/destacados")
                setTrabajadoresDestacados(trabajadoresDestacados.data.data.mejorValorados)

            }catch (e) {
                console.log(e.message)
            }
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
        trabajadoresDestacados()
        profesiones()
    }, [])

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
    const handleTrabajadorInfo = (id)=>{
        history.push(`/trabajadores/${id}`)
    }
    const selectInput = () =>{
        const input = document.getElementById('input');
        input.select()
    }
    const handleProfesion = (profesion) => {
        ReactGA.event({category:'Click en Profesión', action:`${profesion}`})
    }
    
    const handleCategorias = () => {
        history.push("/categorias")
    }

    const handleNotUser = () => {
        window.alert("Tienes que iniciar sesión para usar esta funcionalidad!")
    }

    return (
        <div className="Home" onClick={hideSearchMenu}>
            <div className="presentacion">
                <div className="container">
                    <div className="content">
                        <h1>Tu hogar en las mejores manos</h1>
                        <p>Obtenga la ayuda de Trabajadores confiables para todo trabajo que necesite.</p>
                        <div className="busqueda">
                            <div className="search-input" onClick={showSearchMenu}>
                                <i className="fas fa-search" id="search"/>
                                <input type="text" placeholder="¿En qué necesita ayudaa?" autoComplete="off" id="input" value={search} onChange={handleChangeInput}/>
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
                    <div id="extraInfo">      
                        <p id="clickCategorias" onClick={handleCategorias}>Todas las categorías</p>
                        {
                        userInfo ?
                        <a href={`https://api.whatsapp.com/send?phone=51${telefono}&text=${mensaje}`}> <p id="clickCategorias"> ¿No encuentras lo que necesitas? Contáctanos </p> </a> 
                        :
                        <p id="clickCategorias" onClick={handleNotUser}> ¿No encuentras lo que necesitas? Contáctanos </p>    
                        }           
                    </div>       
                </div>
            </div>
            <div className="Mision">
                <h1 className="quienes_somos">¿Quiénes Somos?</h1>           
                <p className="parrafo">
                    Chambeando es una plataforma virtual que brinda especialistas calificados y confiables que estén
                    dispuestos a cubrir tus necesidades en la brevedad de lo posible.<br/> Tenemos como objetivo combatir el desempleo actual causado
                    por el Covid-19. Ahorita estamos haciendo pruebas en La Encantada De Villa y Chorrillos con profesionales recomendados por la comunidad villana.
                </p>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;