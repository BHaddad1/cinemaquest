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
				this.setState({singleMovie: data.movie, isLoading: false})
			})
	}
  
	getDisplayTime() {
		let total = this.state.singleMovie.runtime / 60;
		let time = total.toString();
		let minutes = time.substring(2, 4);
		return `${time[0]} hours ${minutes} minutes`
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
							// src={this.state.singleMovie["poster_path"]} 
							alt="Movie Poster" 
							className="poster"
						/> 
					</div>
					<div className="movie-info">
						<h2 className="movie-title">{this.state.singleMovie.title}</h2>
						<h3>Tagline: <span className="info">{this.state.singleMovie.tagline}</span> </h3>
						<h3>Released: <span className="info">{this.state.singleMovie["release_date"].replaceAll("-", "/")} </span> </h3>
						<h3>Average Rating: <span className="info">{this.state.singleMovie["average_rating"]}</span> </h3>
						<h3>Genres: <span className="info">{this.state.singleMovie.genres.join(", ")} </span> </h3>
						<p>Overview: <span className="info">{this.state.singleMovie.overview} </span> </p>
						<p>Budget: <span className="info">${this.state.singleMovie.budget.toLocaleString("en-US")} </span> </p>
						<p>Total Revenue: <span className="info"> ${this.state.singleMovie.revenue.toLocaleString("en-US")} </span> </p>
						<p>Total Runtime: <span className="info"></span><span>{this.getDisplayTime()}</span></p>
					</div>
				</section>
			</section>
		)
	}
}

export default SingleMovie;

