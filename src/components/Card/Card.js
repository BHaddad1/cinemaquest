import React from "react";
import './Card.css';

const Card = ({ id, image}) => {

    return (
        <div className="movie-card">
					<img src={image}/> 
        </div>
    )

}

export default Card; 