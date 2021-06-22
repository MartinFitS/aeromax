import React from "react";
import HeaderNoHome from "../components/HeaderNoHome";
import Logo from "../assets/static/logo-Aeromax-negro.png"
import "../assets/styles/NotFound.css";
import {Link} from "react-router-dom";

const NotFound = () => (
    <React.Fragment>
          <HeaderNoHome/>
            <div className="containerNotFound">
                <div className="containerNotFound-left">
                    <div className="containerNotFound-left-img">
                        <img src={Logo}></img>
                    </div>
                </div>
                <div className="containerNotFound-rigth">
                    <div className="containerNotFound-rigth-text"> 
                        <h1>Opps error 404, lo sentimos no pudimos encontramos lo que estaba buscando:c</h1>
                        <p>Puede regresar al home clickeando en este botón.</p>
                        <Link to="/aeromax">
                            <button>Regresar Al Home</button>                     
                        </Link>
                    </div>
                </div>
            </div>
    </React.Fragment>
);

export default NotFound;