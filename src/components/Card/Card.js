import React from "react";
import "./Card.css";

const Card = ({ id, image, handleCardClick }) => {
  
  return (
    <div className="movie-card">
      <img
        className="movie-image"
        src={image}
        alt="movie poster"
        onClick={() => handleCardClick(id)}
      />
    </div>
  );
};

export default Card;
