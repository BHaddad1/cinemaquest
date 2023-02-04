import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import getData from '../../apiCalls/api';

class App extends Component {
 constructor() {
  super();
  this.state = {
    allMovies: [],
    singleMovieId: 0,
    singleMovie: "",
    error: "",
    isLoading: true,
  }
 }

 componentDidMount = () => {
  getData("movie")
    .then(data => {
      this.setState({allMovies: data.movies, isLoading: false})
    })
    .catch(error => {this.setState({error: error.message})})
 }

 handleCardClick = id => {
  const foundMovie = this.state.allMovies.find(movie => movie.id === id);
  getData(`movies/${foundMovie.id}`)
    .then(data => this.setState({singleMovie: data.movie, singleMovieId: data.movie.id}))
    .catch(error => this.setState({error: error.message}))

 }

 handleBackButton = () => {
  this.setState({singleMovie: "", singleMovieId: 0})
 }

 render() {
  return (
    <div>
      <Form />
      {this.state.isLoading && !this.state.error && <h2 className="loading">Loading...</h2>}
      {this.state.error && <h2 className="error">Sorry, there was an error. Please come back later.</h2>}
      {this.state.allMovies && !this.state.singleMovieId && !this.state.singleMovie &&
      <Movies 
        movies={this.state.allMovies}
        handleCardClick={this.handleCardClick}
      />}
      {this.state.singleMovie && this.state.singleMovieId && 
      <SingleMovie
        singleMovie={this.state.singleMovie}
        handleBackButton={this.handleBackButton}
      />}
    </div>
  )
 }
  
}


export default App;
