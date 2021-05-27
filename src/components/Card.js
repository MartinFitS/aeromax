import React from "react";
import "../assets/styles/Card.css";

const Card = (props) => {
    const {type,img,product,description,price} = props;

    return(  
            <div className="card">
                <div className="img">
                    <img src={img} alt="image_card"/>
                </div>
                <div className="info">
                    <h1>{type}</h1>
                    <h2>{product}</h2>
                    <p>{description}</p>
                    <h3>{price}</h3>
                </div>
            </div>
)
};

export default Card;