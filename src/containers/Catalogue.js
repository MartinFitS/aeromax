import React from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import CatalogueNav from "../components/CatalogueNav";
import "../assets/styles/Catalogue.css";

const Catalogue = ({products}) => {
   
    const filterUsb = products.filter(usb => usb.type === "USB");
    const filterSd = products.filter(sd => sd.type === "MICRO SD")
    return(
    <div className="mainContainer">
        <CatalogueNav/>
        <div className="accommodateDiv">
            <div className="containerCard">
                <div className="containerName"><h1>USB</h1></div>
                {
                    filterUsb.map(
                        usb => <Card key={usb.id} {...usb}/>
                    )
                }
            </div>
            <div className="containerCard">
                <div className="containerName"><h1>Micro SD</h1></div>
                {
                    filterSd.map(
                        sd => <Card key={sd.id} {...sd}/>
                    )
                }
            </div>
        </div>
       
    </div>
)};

const mapStateToProps = state =>{
    return{
        products:state.products
    }
}

export default connect(mapStateToProps,null)(Catalogue);