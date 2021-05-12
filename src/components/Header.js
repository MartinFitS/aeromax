import React from "react";
import Logo from "../assets/static/logo.png";
import "../assets/styles/Header.css"

const Header = () =>(
    <React.Fragment>
        <div class="header">
        <div class="logo-menu">
            <div class="logo">
                <img src={Logo} alt=""/>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="/">Catálogo</a></li>
                    <li><a href="/">Contactos</a></li>
                </ul>
            </div>
        </div>
    
        <div class="form">

               <h1>¿Que estás buscando?</h1>

               <div class="container-form">
                   <form class="nav">
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