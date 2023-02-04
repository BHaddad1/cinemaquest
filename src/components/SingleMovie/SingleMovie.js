import React from "react";
import './SingleMovie.css'; 

const SingleMovie = ({ singleMovie, handleBackButton }) => {
  
	let total = singleMovie.runtime / 60;
	let time = total.toString();
	let minutes = time.substring(2, 4);

	return (
		<section className="single-movie-container">
			<button className="back-button" onClick={handleBackButton}>Go Back Home</button>
			<section className="single-movie">
				<div className="poster-container">
					<img 
						src={singleMovie["poster_path"]} 
						alt="Movie Poster" 
						className="poster"
					/> 
				</div>
				<div className="movie-info">
					<h2>{singleMovie.title}</h2>
					<h3>{singleMovie.tagline}</h3>
					<h3>Released:  {singleMovie["release_date"].replaceAll("-", "/")}</h3>
					<h3>Average Rating:  {singleMovie["average_rating"]}</h3>
					<h3>Genres:  {singleMovie.genres.join(", ")}</h3>
					<p>Overview:  {singleMovie.overview}</p>
					<p>Budget:  ${singleMovie.budget.toLocaleString("en-US")}</p>
					<p>Total Revenue:  ${singleMovie.revenue.toLocaleString("en-US")}</p>
					<p>Total Runtime:  <span>{time[0]} hours</span>  <span>{minutes} minutes</span></p>
				</div>
			</section>
		</section>
	)
}

export default SingleMovie;

