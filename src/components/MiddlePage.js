import React from "react";
import "../assets/styles/MiddlePage.css";


const MiddlePage = () => (
    <div class="intermedio">
        <div class="intermedio-container">
            <div class="intermedio-container_left">
                <div class="title-container_left">
                    <h1>¿Dónde nos encontramos?</h1>
                </div>
                <div class="direction-button">
                    <p>Nos encontramos entre la intersección de las calles Hidalgo y 5 de mayo en Manzanillo Centro. Venta de equipo de computo, impresiones y más.</p>
                    <a href="https://www.google.com/maps?ll=19.051196,-104.315447&z=16&t=m&hl=es&gl=MX&mapclient=embed&cid=9530300163618480894" target="_blank" rel="noreferrer"><button>Ir a google maps</button></a>
                </div>
            </div>
            <div class="intermedio-container_right">
                
                <div class="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2849217050607!2d-104.3155017471396!3d19.05120649199702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8424d509f90cb583%3A0x84426d814f53a2fe!2sCiber%20Aeromax%20computadoras!5e0!3m2!1ses!2smx!4v1620840536250!5m2!1ses!2smx" title="map"></iframe>
                </div>
               
            </div>
        </div>
    </div>
);

export default MiddlePage;