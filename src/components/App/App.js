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

 render() {
  return (
    <div>
      <Form />
      <Movies 
        movies={this.state.allMovies}
      />
      <SingleMovie
       
      />
    </div>
  )
 }
  
}

export default App;
