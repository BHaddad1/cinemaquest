import React from "react";
import './Movies.css';
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
	
	const movieCards = movies.map((movie) => {
		return (
			<Link to={`/movies/${movie.id}`} key={movie.id}> 
				<Card 
					key={movie.id}
					id={movie.id}
					image={movie['poster_path']}
				/>
			</Link>
		)
	})
	
  return (
    <section className='movies-container'> 
			{movieCards}
    </section> 
  )
}

export default Movies;

Movies.propTypes = {
	movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}