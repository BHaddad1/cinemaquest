import React from "react";
import './Movies.css';
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const Movies = ({ movies }) => {
	
	const movieCards = movies.map((movie) => {
		return (
			<NavLink to={`/movies/${movie.id}`} key={movie.id}> 
				<Card 
					key={movie.id}
					id={movie.id}
					image={movie['poster_path']}
				/>
			</NavLink>
		)
	})

    return (
       <section className='movies-container'> 
				{movieCards}
       </section> 
    )

}

export default Movies;