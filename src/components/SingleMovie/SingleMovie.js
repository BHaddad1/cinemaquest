import React from "react";
import './SingleMovie.css'; 

const SingleMovie = ({ image, title, releaseDate, overview, rating, genre, budget, revenue, runtime, tagline }) => {
  
	return (
		<section className="single-movie">
			<div className="poster">
				<img src={image} alt="movie poster"/> 
			</div>
			<div className="movie-info">
				<h2>{title}</h2>
				<h3>{releaseDate}</h3>
				<h3>{tagline}</h3>
				<h3>{genre}</h3>
				<h3>{rating}</h3>
				<p>{overview}</p>
				<p>{runtime}</p>
				<p>{budget}</p>
				<p>{revenue}</p>
			</div>
		</section>
	)
}

export default SingleMovie;