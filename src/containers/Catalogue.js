import React from "react";
import HeaderNoHome from "../components/HeaderNoHome";
import { connect } from "react-redux";
import Card from "../components/Card";
import CatalogueNav from "../components/CatalogueNav";
import "../assets/styles/Catalogue.css";

const Catalogue = ({products}) => {
   
    const filterUsb = products.filter(usb => usb.type === "USB");
    const filterSd = products.filter(sd => sd.type === "MICROSD");
    const filterHeadphones = products.filter(hp => hp.type === "AUDIFONOS");

    return(
        <React.Fragment>
            <HeaderNoHome/>
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
                    <div className="containerCard">
                        <div className="containerName"><h1>AUDIFONOS</h1></div>
                        {
                            filterHeadphones.map(
                                hp => <Card key={hp.id} {...hp}/>
                            )
                        }
                    </div>
                </div>      
            </div>
        </React.Fragment>
        
)};

const mapStateToProps = state =>{
    return{
        products:state.products
    }
}

export default connect(mapStateToProps,null)(Catalogue);