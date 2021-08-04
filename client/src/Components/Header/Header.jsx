import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom"
import "./Header.css"
import logo from "./logo.jpeg"
import ToggleLogo from "./ToggleLogo.png"

const Header = ()=>{
    let history = useHistory()
    const handleClickHome = ()=>{
        history.push("/")
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
            </div>
            <button className="toggleMenu" onClick={changeNavState}>
            &#8801;
            </button>
        </nav>
        {
                NavState && <aside onClick={changeNavState}>
                    <Link to="/">Inicio</Link>
            <Link to="/trabajadores">Trabajadores</Link>
                </aside>
            }
        </div>
    )
}
export default Header