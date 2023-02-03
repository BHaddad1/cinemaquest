import React from "react";
import './Card.css';

const Card = ({ id, image}) => {

    return (
        <div className="movie-card">
					<img src={image} alt='movie poster'/> 
        </div>
    )

}

export default Card; 