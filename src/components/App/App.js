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
    singleMovie: {},
  }
 }

 componentDidMount = () => {
  this.setState({allMovies: movieData.movies})
 }

 findSingleMovie = (id) => {
  const foundMovie = this.state.allMovies.find(movie => movie.id === id);
  this.setState({singleMovie: foundMovie, singleMovieId: foundMovie.id});
 }

 render() {
  return (
    <div>
      <Form />
      <Movies 
        movies={this.state.allMovies}
        findSingleMovie={this.findSingleMovie}
      />
      <SingleMovie
        image={this.state.singleMovie['poster_path']}
        title={this.state.singleMovie.title}
        releaseDate={this.state.singleMovie['release_date']}
        rating={this.state.singleMovie['average_rating']}
      />
    </div>
  )
 }
  
}


export default App;
