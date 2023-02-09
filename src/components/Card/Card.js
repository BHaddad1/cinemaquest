import React from "react";
import "./Card.css";
import PropTypes from 'prop-types';

const Card = ({ id, image }) => {
  
  return (
    <div className="movie-card">
      <img
        className="movie-image"
        src={image}
        alt="movie poster"
      />
    </div>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}