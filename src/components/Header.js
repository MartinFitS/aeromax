import React from "react";
import Logo from "../assets/static/logo.png";
import {Link} from "react-router-dom";
import "../assets/styles/Header.css"

const Header = () =>(
    <React.Fragment>
        <div className="header">
        <div className="logo-menu">
            <Link to="/aeromax">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
            </Link>
    
            <div className="menu">
                <ul>
                    <Link to="/catalogo">
                        <li>Catálogo</li>
                    </Link>
                 
                    <li>Contactos</li>
                </ul>
            </div>
        </div>
    
        <div className="form">
               <h1>¿Que estás buscando?</h1>

               <div className="container-form">
                   <form className="nav">
                       <input 
                       type="text"
                       placeholder="Escriba aqui"
                       />
                       <button>Buscar</button>
                   </form>
               </div>
        </div>
    </div>
    </React.Fragment>   
);

export default Header;