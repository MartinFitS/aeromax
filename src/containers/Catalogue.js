import React from "react";
import HeaderNoHome from "../components/HeaderNoHome";
import Card from "../components/Card";
import CatalogueNav from "../components/CatalogueNav";
import "../assets/styles/Catalogue.css";

class Catalogue extends React.Component{
    
    constructor (props){
        super(props)
        this.API = `https://aeromax-api.vercel.app/api/products`
        this.state = {
            products: []
        }
    }
  
    componentDidMount(){
        fetch(this.API)
            .then(response => response.json())
            .then(products => this.setState({products: products.data}))
    }

    render(){
        let products = this.state.products;
        let filterCatalogueUSB = products.filter((i)=>{
            return i.type === "USB"
        });

        let filterCatalogueMICRO = products.filter((i)=>{
            return i.type === "MICROSD"
        });

        let filterCatalogueHEADPHONES = products.filter((i)=>{
            return i.type === "AUDIFONOS"
        })

        let filterCatalogueCAMERAS = products.filter((i)=>{
            return i.type === "CAMARA"
        })
        
        console.log(filterCatalogueCAMERAS)

        return<React.Fragment>
        <HeaderNoHome/>
        <div className="mainContainer">
        <div className="cardNav">
            <h1>USB</h1>
            <ul>
              {
                filterCatalogueUSB.map(i=>
                    <CatalogueNav
                        key={i.id}
                        {...i}
                    />    
                )
            }
            </ul>
            <h1>MICRO SD</h1>
            <ul>
            {
                filterCatalogueMICRO.map(i=>
                    <CatalogueNav
                        key={i.id}
                        {...i}
                    />    
                )
            }
            </ul>
            <h1>AUDIFONOS</h1>
            <ul>
            {
                filterCatalogueHEADPHONES.map(i=>
                    <CatalogueNav
                        key={i.id}
                        {...i}
                    />    
                )
            }
            </ul>
        </div>
            <div className="accommodateDiv">
                <div className="containerCard">
                    <div className="containerName"><h1>USB</h1></div>
                        {
                            filterCatalogueUSB.map(i=>
                                    <Card
                                        key={i.id}
                                        {...i}
                                    />
                                )
                        }
                </div>
                <div className="containerCard">
                    <div className="containerName"><h1>Micro SD</h1></div>
                    {
                        filterCatalogueMICRO.map(i=>
                            <Card
                                key={i.id}
                                {...i}
                            />    
                        )
                    }
                </div>
                <div className="containerCard">
                    <div className="containerName"><h1>AUDIFONOS</h1></div>
                    {
                        filterCatalogueHEADPHONES.map(
                            hp => <Card key={hp.id} {...hp}/>
                        )
                    }
                </div>

                <div className="containerCard">
                    <div className="containerName"><h1>WEB CAMS</h1></div>
                    {
                        filterCatalogueCAMERAS.map(
                            camera => <Card key={camera.id} {...camera}/>
                        )
                    }
                </div>
            </div>      
        </div>
    </React.Fragment>
    }
};

export default Catalogue;
