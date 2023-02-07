import React, {Component} from 'react';
import { Route } from 'react-router-dom';
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
    error: "",
    isLoading: true,
  }
 }

 componentDidMount = () => {
  getData("movies")
    .then(data => {
      this.setState({allMovies: data.movies, isLoading: false})
    })
    .catch(error => {this.setState({error: error.message})})
 }

//  handleCardClick = id => {
//   const foundMovie = this.state.allMovies.find(movie => movie.id === id);
//   getData(`movies/${foundMovie.id}`)
//     .then(data => this.setState({singleMovie: data.movie, singleMovieId: data.movie.id}))
//     .catch(error => this.setState({error: error.message}))

//  }

//  handleBackButton = () => {
//   this.setState({singleMovie: "", singleMovieId: 0})
//  }

 render() {
  return (
    <div>
      <Form />
      {this.state.isLoading && !this.state.error && <h2 className="loading">Loading...</h2>}
      {this.state.error && <h2 className="error">Sorry, there was an error. Please come back later.</h2>}
      <Route exact path='/' render={() => <Movies movies={this.state.allMovies} />}></Route>
      <Route path='/:movieId' render={({ match }) => {
        return <SingleMovie movieID={match.params.movieId}/>
      }}
     ></Route>
    </div>
  )
 }
  
}


export default App;
