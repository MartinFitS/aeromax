import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import MiddlePage from "../components/MiddlePage.js";
import Card from "../components/Card";
import CatalogueNav from "../components/CatalogueNav";
import "../assets/styles/Home.css"

const Home = ({search, products}) =>{
    let searchNull = search === null;
    let validationNotUndefinded = searchNull ? null : search.search != undefined;
    let keyForNotResults = false;
    let searchFilter = validationNotUndefinded ? search.search.toUpperCase().replace(/\s+/g, ''):null;


    let filterCatalogue = products.filter((i)=>{
        return i.type === searchFilter
    });

    if(filterCatalogue == 0){
        filterCatalogue = products.filter((i)=>{
            return i.class === searchFilter
        });
    }
   if(filterCatalogue == 0){
        keyForNotResults = true;
   }

    console.log(filterCatalogue);
    return(
        <div>
               <Header/>
            <div className="titleSearch">
                {
                     validationNotUndefinded && keyForNotResults === false
                     ?
                     <h1>Estos son los resultados para su búsqueda: <span>{searchFilter}</span></h1>
                     :
                     null
                }

                {
                    validationNotUndefinded && keyForNotResults === true
                    ?
                    <h1 className="badSearch">No se encontraron resultados para: <span>{searchFilter}:(</span></h1>
                    :
                    null
                }
                     {
                    validationNotUndefinded && keyForNotResults === true
                    ?
                    <p>Puede intentar con las siguientes palabras clave: Memorias , Usb , Micro Sd</p>
                    :
                    null
                }
            </div>
            <div className="containerSearch">
   
                    {
                        validationNotUndefinded && keyForNotResults === false
                        ?
                        <CatalogueNav/>
                        :
                        null
                    }
                <div className= "containerCardSearch">
                    {
                        validationNotUndefinded?
                        filterCatalogue.map(i=>
                            <Card
                                key={i.id}
                                {...i}
                            />
                        )
                        :
                        null
                    }
                    </div>
                <div/>
            </div>
            <MiddlePage/>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        search: state.search,
        products: state.products
    }
}

export default connect(mapStateToProps,null)(Home);