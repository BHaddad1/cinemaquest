import React from "react";
import './Movies.css';
import Card from "../Card/Card";

const Movies = ({ movies, findSingleMovie }) => {
	
	const movieCards = movies.map((movie) => {
		return (
			<Card 
				key={movie.id}
				id={movie.id}
				image={movie['poster_path']}
				findSingleMovie={findSingleMovie}
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