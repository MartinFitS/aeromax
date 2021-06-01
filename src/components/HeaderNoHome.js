import React from "react";
import "../assets/styles/HeaderNoHome.css";
import {Link} from "react-router-dom"

const HeaderNoHome = () => (
    <div className="headerNoHome_container">
        <div className="headerNoHome_container__menu">
            <ul>
                <Link to="/aeromax">
                    <li>Home</li>
                </Link>
           
                <li>Contactos</li>
            </ul>
        </div>
    </div>
);

export default HeaderNoHome;