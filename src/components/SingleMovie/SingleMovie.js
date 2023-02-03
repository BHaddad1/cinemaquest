import React from "react";
import './SingleMovie.css'; 

const SingleMovie = ({ singleMovie, handleBackButton }) => {
  
	let total = singleMovie.runtime / 60
	let time = total.toString();
	let minutes = time.substring(2, 4);

	return (
		<section className="single-movie">
			<button onClick={handleBackButton}>Go Back Home</button>
			<div className="poster">
				<img src={singleMovie["poster_path"]} alt="Movie Poster"/> 
			</div>
			<div className="movie-info">
				<h2>{singleMovie.title}</h2>
				<h3>{singleMovie.tagline}</h3>
				<h3>Released:  {singleMovie["release_date"].replaceAll("-", "/")}</h3>
				<h3>Average Rating:  {singleMovie["average_rating"]}</h3>
				<h3>Genres:  {singleMovie.genres.join(", ")}</h3>
				<p>Overview:  {singleMovie.overview}</p>
				<p>Budget:  ${singleMovie.budget}</p>
				<p>Total Revenue:  ${singleMovie.revenue}</p>
				<p>Total Runtime:  <span>{time[0]} hours</span>  <span>{minutes} minutes</span></p>
			</div>
		</section>
	)
}

export default SingleMovie;

