import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form';
import Movies from '../Movies/Movies';
import movieData from '../../../data/movieData';

class App extends Component {
 constructor() {
  super();
  this.state = {
    allMovies: [],
    singleMovieId: 0,
  }
 }

 componentDidMount = () => {
  this.setState({allMovies: movieData})
 }

 render() {
  return (
    <div>
      <Form />
      <Movies 
        movies={this.state.allMovies}
      />
      <SingleMovie />
    </div>
  )
 }
  
}

export default App;
