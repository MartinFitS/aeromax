import React from "react";
import "../assets/styles/Footer.css"
import whatsappIcon from "../assets/static/whatsapp.png";
import telephoneIcon from "../assets/static/telefono.png";
import facebookIcon from "../assets/static/facebook.png";
import emailIcon from "../assets/static/panorama.png";
import instagramIcon from "../assets/static/instagram.png";
import githubIcon from "../assets/static/github.png";
import iconApi from "../assets/static/api.png";
import Logo from "../assets/static/logo-Aeromax-negro.png";

const Footer = () => (
    <footer className="footer">
        <div className="footer-container_left">
            <div className="footer-title-container_left">
                <h1>
                    Contactos
                </h1>
                <div className="listOfContacts">
                    <ul>
                          <a href="https://api.whatsapp.com/send?phone=3141435050&text=Hola,%20me%20interesan%20sus%20productos" target="_blank" rel="noreferrer"><div className="icon"><img src={whatsappIcon} alt="WhatsApp Icon"/><li>314.143.5050</li></div></a>
                          <div className="icon"><img src={telephoneIcon} alt="Telephone Icon"/><li>332.1794</li></div>
                          <a href="https://www.facebook.com/CiberAeromax" target="_blank" rel="noreferrer"><div className="icon"><img src={facebookIcon} alt="Facebook Icon"/><li>@CIBERAEROMAXMANZANILLO</li></div></a>
                          <a href="mailto:ciberaeromax@hotmail.com" Subject="Hola%20me%20interesan%20sus%20productos"><div className="icon"><img src={emailIcon} alt="Email Icon"/><li>ciberaeromax@hotmail.com</li></div></a>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-container_center">
            <div className="logo-footer">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="title-footer_center">
                <h1>Aero</h1><span>m@x</span>
            </div>
        </div>
        <div className="footer-container_rigth">
            <div className="information-creator">
                <h1>Contacto del creador</h1>
            </div>
            <div className="listOfContacts">
                <ul>

                      <a href="https://api.whatsapp.com/send?phone=3143386885&text=Hola,%20me%20gusto%20mucho%20tu%20página&20web" target="_blank" rel="noreferrer"><div className="icon"><img src={whatsappIcon} alt="WhatsApp Icon"/><li>314.338.6885</li></div></a>
                      <a href="https://www.instagram.com/mserna10/?hl=es-la" target="_blank" rel="noreferrer"><div className="icon"><img src={instagramIcon} alt="Instagram Icon"/><li>@mserna10</li></div></a>
                      <a href="https://github.com/MartinFitS"  target="_blank" rel="noreferrer"><div className="icon"><img src={githubIcon} alt="GitHub Icon"/><li>@MartinFitS</li></div></a>
                      <a href="https://aeromax-api.vercel.app/api/products"  target="_blank" rel="noreferrer"><div className="icon"><img src={iconApi} alt="GitHub Icon"/><li>App powered by @Aeromax-Api</li></div></a>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;