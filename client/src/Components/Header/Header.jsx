import React, { useState, useContext } from "react";
import {Link, useHistory} from "react-router-dom"
import "./Header.css"
import logo from "./logo.jpeg"
import ToggleLogo from "./ToggleLogo.png"
import { TrabajadoresContext } from "../../Context/Context";


const Header = ()=>{
    const {userInfo} = useContext(TrabajadoresContext)
    let history = useHistory()
    const handleClickHome = ()=>{
        history.push("/")
    }

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("userInfo")
        window.location.reload();
    }

    const handleClickTrabajadores = ()=>{
        history.push("/trabajadores")
    }
    const [NavState, setNavState] = useState(false)
    const changeNavState = () => {
        setNavState(!NavState)
    }
    return (
        <div className="NavContainer">
            <nav>
            <img src={logo} onClick={handleClickHome} alt="logo" className="imagen"/>
            <img src={ToggleLogo} alt="logo" className="toggle-logo"/>
            <div className="notToggle">
            <Link to="/">Inicio</Link>
            <Link to="/trabajadores">Trabajadores</Link>
            { userInfo ?
            <Link onClick={handleLogout} to="/">Cerrar Sesión</Link>
            :
            <>
            <Link to="/Registro">Registro</Link>
            <Link to="/login">Iniciar Sesión</Link>
            </>
            }
            <Link to="/categorias">Categorias</Link>
            </div>
            <button className="toggleMenu" onClick={changeNavState}>
            &#8801;
            </button>
        </nav>
        {
                NavState && <aside onClick={changeNavState}>
                    <Link to="/">Inicio</Link>
            <Link to="/trabajadores">Trabajadores</Link>
            { userInfo ?
            <Link onClick={handleLogout} to="/">Cerrar sesión</Link>
            :
            <>
            <Link to="/Registro">Registro</Link>
            <Link to="/login">Iniciar Sesión</Link>
            </>
            }
            <Link to="/categorias">Categorias</Link>
                </aside>
            }
        </div>
    )
}
export default Header