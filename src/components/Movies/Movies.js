import React from "react";

const Movies = ({ movies }) => {
	
	const movieCards = movies.map((movie) => {
		return (
			<Card 
				key={movie.id}
				id={movie.id}
				image={movie['poster_path']}
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