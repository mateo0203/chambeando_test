import React from "react";
import {useHistory} from "react-router-dom"
import "./Header.css"
import logo from "./logo.jpeg"
const Header = ()=>{
    let history = useHistory()
    const handleClickHome = ()=>{
        history.push("/")
    }
    const handleClickTrabajadores = ()=>{
        history.push("/trabajadores")
    }
    return (
        <div className="header">
            <img src={logo} oncClick={handleClickHome} alt="logo" className="imagen"/>
            <nav className="menu">
                <ul>
                    <li onClick={handleClickHome}><h3>Inicio</h3></li>
                    <li onClick={handleClickTrabajadores}><h3>Trabajadores</h3></li>
                    <li><a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/chambeando.peru/"><i className="fab fa-instagram" id="insta"></i></a> <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/profile.php?id=100070622113808"><i className="fab fa-facebook-square" id="facebook"></i></a></li>
                </ul>
            </nav>
        </div>
    )

}
export default Header