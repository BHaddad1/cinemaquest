import React, { Component } from "react";
import './SingleMovie.css'; 
import getData from "../../apiCalls/api";
import { NavLink } from 'react-router-dom'; 

class SingleMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			singleMovie:{},
		}
	}

	componentDidMount() {
		getData(`/movies/${this.props.movieID}`)
			.then(data => {
				console.log('here',data);
				const title = data.movie.title;
				const tagline = data.movie.tagline;
				const releaseDate = data.movie["release_date"].replaceAll("-", "/");
				const averageRating = data.movie["average_rating"];
				const genres = data.movie.genres.join(",  ");
				const overview = data.movie.overview;
				const budget = data.movie.budget.toLocaleString("en-US");
				const revenue = data.movie.revenue.toLocaleString("en-US");
				const runtime = data.movie.runtime;
				const backDropImg = data.movie['backdrop_path'];
				const posterPath = data.movie['poster_path']; 
				
				const alteredSingleMovie = {
					title: title,
					tagline: tagline,
					release_date: releaseDate,
					average_rating:averageRating,
					genres:genres,
					overview: overview,
					budget:budget,
					revenue: revenue,
					runtime: runtime,
					backdrop_path: backDropImg,
					poster_path: posterPath,
				}
				
				this.setState({singleMovie: alteredSingleMovie, isLoading: false})
			})
	}
  
	getDisplayTime() {
		let total = this.state.singleMovie.runtime; 
		const hours = Math.floor(total / 60);
		const minutes = total % 60;
		return `${hours.toFixed(0)} hrs ${minutes.toFixed(0)} min`
	}
	 
	render() {
		return (
			<section className="single-movie-container">
				<NavLink to='/'>
					<button className="back-button">Go Back Home</button>
				</NavLink>
				<section className="single-movie">
					<div className="poster-container">
						<img 
							src={this.state.singleMovie["poster_path"]} 
							alt="Movie Poster" 
							className="poster"
						/> 
					</div> 
					 <div className="movie-info">
						<h2 className="movie-title">{this.state.singleMovie.title}</h2>
						<h3>Tagline: <span className="info">{this.state.singleMovie.tagline}</span></h3>
						<h3>Released: <span className="info">{this.state.singleMovie["release_date"]}</span></h3>
						<h3>Average Rating: <span className="info">{this.state.singleMovie["average_rating"]}</span></h3>
						<h3>Genres: <span className="info">{this.state.singleMovie.genres}</span></h3>
						<p>Overview: <span className="info">{this.state.singleMovie.overview}</span></p>
						<p>Budget: <span className="info">${this.state.singleMovie.budget}</span></p>
						<p>Total Revenue: <span className="info"> ${this.state.singleMovie.revenue}</span></p>
						<p>Total Runtime: <span className="info">{this.getDisplayTime()}</span></p>
					</div> 
				</section>
			</section>
		)
	}
}

export default SingleMovie;


