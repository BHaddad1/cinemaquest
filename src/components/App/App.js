import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form';
import Movies from '../Movies/Movies';
import movieData from '../../data/movieData';
import SingleMovie from '../SingleMovie/SingleMovie';

class App extends Component {
 constructor() {
  super();
  this.state = {
    allMovies: [],
    singleMovieId: 0,
    singleMovie: "",
    error: "",
    isLoading: false,
  }
 }

 componentDidMount = () => {
  // all movie fetching
  this.setState({allMovies: movieData.movies})
 }

 handleCardClick = id => {
  const foundMovie = this.state.allMovies.find(movie => movie.id === id);
  // single movie fetch
  console.log(foundMovie)
  this.setState({singleMovie: foundMovie, singleMovieId: foundMovie.id});
 }

 handleBackButton = () => {
  this.setState({singleMovie: "", singleMovieId: 0})
 }

 render() {
  return (
    <div>
      <Form />
      {this.state.allMovies && !this.state.singleMovieId && !this.state.singleMovie &&
      <Movies 
        movies={this.state.allMovies}
        handleCardClick={this.handleCardClick}
      />}
      <SingleMovie
        image={this.state.singleMovie['poster_path']}
        title={this.state.singleMovie.title}
        releaseDate={this.state.singleMovie['release_date']}
        rating={this.state.singleMovie['average_rating']}
        handleBackButton={this.handleBackButton}
      />
    </div>
  )
 }
  
}


export default App;
