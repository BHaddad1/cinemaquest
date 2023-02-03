import React from "react";
import './Card.css';

const Card = ({ id, image, findSingleMovie }) => {
 
 return (
    <div className="movie-card">
	  <img 
        className="movie-image" 
        src={image} 
        alt='movie poster'
        onClick={() => findSingleMovie(id)}
      /> 
    </div>
  )
  
}

export default Card; 