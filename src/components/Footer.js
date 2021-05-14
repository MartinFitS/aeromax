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

                          <div class="icon"><img src={whatsappIcon} alt="WhatsApp Icon"/><li>314.143.5050</li></div>
                          <div class="icon"><img src={telephoneIcon} alt="Telephone Icon"/><li>332.1794</li></div>
                          <div class="icon"><img src={facebookIcon} alt="Facebook Icon"/><li>@CIBERAEROMAXMANZANILLO</li></div>
                          <div class="icon"><img src={emailIcon} alt="Email Icon"/><li>ciberaeromax@hotmail.com</li></div>
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

                      <div class="icon"><img src={whatsappIcon} alt="WhatsApp Icon"/><li>314.338.6885</li></div>
                      <div class="icon"><img src={instagramIcon} alt="Instagram Icon"/><li>@mserna10</li></div>
                      <div class="icon"><img src={githubIcon} alt="GitHub Icon"/><li>@MartinFitS</li></div>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;