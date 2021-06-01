import React, {useState} from "react";
import {connect} from "react-redux";
import Logo from "../assets/static/logo.png";
import {Link} from "react-router-dom";
import "../assets/styles/Header.css";
import {searchProduct} from "../actions";

const Header = props =>{

    const[busqueda,setValues] = useState(null);

    const handleInput = event =>{
        setValues({
            ...busqueda,
            [event.target.name]:event.target.value,
            id:0
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.searchProduct(busqueda);
    }
return(
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
    
        <div className="form" onSubmit={handleSubmit}>
               <h1>¿Que estás buscando?</h1>

               <div className="container-form">
                   <form className="nav">
                       <input 
                       type="text"
                       name="search"
                       placeholder="Escriba aqui"
                       onChange={handleInput}
                       />
                       <button>Buscar</button>
                   </form>
               </div>
        </div>
    </div>
    </React.Fragment>   
)
};

const mapDispatchToProps = {
    searchProduct,
}


export default connect(null,mapDispatchToProps)(Header);