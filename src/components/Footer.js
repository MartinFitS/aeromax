import React from "react";
import "../assets/styles/Footer.css"
import whatsappIcon from "../assets/static/whatsapp.png";
import telephoneIcon from "../assets/static/telefono.png";
import facebookIcon from "../assets/static/facebook.png";
import emailIcon from "../assets/static/panorama.png";
import instagramIcon from "../assets/static/instagram.png";
import githubIcon from "../assets/static/github.png";
import Logo from "../assets/static/logo.png";

const Footer = () => (
    <footer class="footer">
        <div class="footer-container_left">
            <div class="footer-title-container_left">
                <h1>
                    Contactos
                </h1>
                <div class="listOfContacts">
                    <ul>
                          <a href="https://api.whatsapp.com/send?phone=3141435050&text=Hola,%20me%20interesan%20sus%20productos" target="_blank" rel="noreferrer"><div class="icon"><img src={whatsappIcon} alt="WhatsApp Icon"/><li>314.143.5050</li></div></a>
                          <div class="icon"><img src={telephoneIcon} alt="Telephone Icon"/><li>332.1794</li></div>
                          <a href="https://www.facebook.com/CiberAeromax" target="_blank" rel="noreferrer"><div class="icon"><img src={facebookIcon} alt="Facebook Icon"/><li>@CIBERAEROMAXMANZANILLO</li></div></a>
                          <a href="mailto:ciberaeromax@hotmail.com" Subject="Hola%20me%20interesan%20sus%20productos"><div class="icon"><img src={emailIcon} alt="Email Icon"/><li>ciberaeromax@hotmail.com</li></div></a>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-container_center">
            <div class="logo-footer">
                <img src={Logo} alt=""/>
            </div>
            <div class="title-footer_center">
                <h1>Aero</h1><span>m@x</span>
            </div>
        </div>
        <div class="footer-container_rigth">
            <div class="information-creator">
                <h1>Contacto del creador</h1>
            </div>
            <div class="listOfContacts">
                <ul>

                      <a href="https://api.whatsapp.com/send?phone=3143386885&text=Hola,%20me%20gusto%20mucho%20tu%20página&20web" target="_blank" rel="noreferrer"><div class="icon"><img src={whatsappIcon} alt="WhatsApp Icon"/><li>314.338.6885</li></div></a>
                      <a href="https://www.instagram.com/mserna10/?hl=es-la" target="_blank" rel="noreferrer"><div class="icon"><img src={instagramIcon} alt="Instagram Icon"/><li>@mserna10</li></div></a>
                      <a href="https://github.com/MartinFitS"  target="_blank" rel="noreferrer"><div class="icon"><img src={githubIcon} alt="GitHub Icon"/><li>@MartinFitS</li></div></a>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;