import React from "react";
import './Movies.css';
import Card from "../Card/Card";

const Movies = ({ movies, handleCardClick }) => {
	
	const movieCards = movies.map((movie) => {
		return (
			<Card 
				key={movie.id}
				id={movie.id}
				image={movie['poster_path']}
				handleCardClick={handleCardClick}
			/>
		)
	})

    return (
       <section className='movies-container'> 
				{movieCards}
       </section> 
    )

}

export default Movies;