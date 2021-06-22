import React, {useEffect,useState} from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import MiddlePage from "../components/MiddlePage.js";
import Card from "../components/Card";
import "../assets/styles/Home.css"

const Home = ({search}) =>{
    const searchInHome = search === null ? "": search.search;
    const URL = "https://aeromax-api.vercel.app/api/products";
    let searchNull = search === null?[]:searchInHome === undefined ? [] : null;
    let result = !searchNull ? search.search.toUpperCase() : null;
    let notFound = false;
    const [products, setProducts] = useState();
 
    const fetchApi = async () => {
        const response = await fetch(URL);
        const responseJSON = await response.json();
        setProducts(responseJSON.data);
    }
  
    useEffect(() => {
        fetchApi();
    }, []);

    let undefinedProduct = products !== undefined;

    let resultProducts = undefinedProduct
        ?
        products.filter((i) => {
            return i.type === result;
        })
        :
        null

    if(resultProducts == 0){
        resultProducts = products.filter((i)=>{
            return i.class == result
        })
    }

    if(resultProducts == 0){
        resultProducts = products.filter((i)=>{
            return i.brand == result
        })
    }

    if(resultProducts == 0){
        notFound = true;
    }

    return (
        <div>
            <Header />
            <div className="titleSearch">
                {
                    notFound && searchNull === false? <h1>Lo siento no encontramos resultados para:{result}:c</h1>:[]
                }
                {
                     notFound === false && searchNull === false ? <h1>Resultados para: {result}:)</h1>:[]
                }
            </div>
            <div className="containerSearch">
                <div className="containerCardSearch">
                    {
                        resultProducts != undefined ? resultProducts.map(i =>
                            <Card
                                key={i.id}
                                {...i}
                            />
                        ) : null
                    }
                </div>
                <div />
            </div>
            <MiddlePage />
        </div>
    )
};

const mapStateToProps = state => {
    return{
        search: state.search,
    }
}

export default connect(mapStateToProps,null)(Home);