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
					<h2 className="movie-title">{singleMovie.title}</h2>
					<h3>Tagline: <span className="info">{singleMovie.tagline}</span> </h3>
					<h3>Released: <span className="info">{singleMovie["release_date"].replaceAll("-", "/")} </span> </h3>
					<h3>Average Rating: <span className="info">{singleMovie["average_rating"]}</span> </h3>
					<h3>Genres: <span className="info">{singleMovie.genres.join(", ")} </span> </h3>
					<h3>Overview: <span className="info">{singleMovie.overview} </span> </h3>
					<h3>Budget: <span className="info">${singleMovie.budget.toLocaleString("en-US")} </span> </h3>
					<h3>Total Revenue: <span className="info"> ${singleMovie.revenue.toLocaleString("en-US")} </span> </h3>
					<h3>Total Runtime: <span className="info"> <span> {time[0]} hours</span> <span>{minutes} minutes</span> </span> </h3>
				</div>
			</section>
		</section>
	)
}

export default SingleMovie;

