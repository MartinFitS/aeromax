import React from "react";
import "../assets/styles/CatalogueNav.css";

const CatalogueNav = (props) => {
    const {product} = props;
    return(  
                <li>{product}</li>       
)};

export default CatalogueNav;