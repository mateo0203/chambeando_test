import React from 'react'

const Footer = () => {

    const telefono = "941461510"
    const mensaje = "¡Hola! Quisiera hacer una recomendación para Chambeando.pe"


    return (
        <footer>
            <div id="recomendacion">
            <span> Recomiéndanos a un nuevo trabajador:</span>
            <a id="wa-icon" href={`https://api.whatsapp.com/send?phone=51${telefono}&text=${mensaje}`}> <i className="fab fa-whatsapp"/> </a>
            </div>
            <div id="redes">
            <span>Síguenos en:</span>
            <a id="ig-icon" href="https://www.instagram.com/chambeando.peru/" target="_blank"><i className="fab fa-instagram"/></a>
            <a id="fb-icon" href="https://www.facebook.com/people/Chambeando/100070622113808/"><i className="fab fa-facebook-f"/></a>
            </div>    
        </footer>
    )
}

export default Footer