import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Form from '../Form/Form';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import getData from '../../apiCalls/api';
import Error from '../Error/Error';
import icon from "../../images/popcorn.png";


class App extends Component {
 constructor() {
  super();
  this.state = {
    allMovies: [],
    error: "",
    isLoading: true,
    filteredMovies: [],
    searchedMovie: "",
  }
 }

 componentDidMount = () => {
  getData("movies")
    .then(data => {
      this.setState({allMovies: data.movies, isLoading: false})
    })
    .catch(error => {this.setState({error: error.message})})
  }

  grabInput = (title) => {
    const lowerCasedInput = title.toLowerCase()
    const alteredMovieTitles = this.state.allMovies.map((movie) => {
     movie.title = movie.title.toLowerCase();
      return movie;
    })
    const filteredMovies = alteredMovieTitles.filter( movie => 
      movie.title.includes(lowerCasedInput))
    this.setState({filteredMovies: filteredMovies, searchedMovie: title})
  }

  clearFilteredMovies = () => {
    this.setState({filteredMovies:[], searchedMovie: ""})
  }

 render() {
  const movieData = this.state.searchedMovie ? this.state.filteredMovies : this.state.allMovies
  return (
    <div>
      <div className="header-container">
        <img className="logo" src={icon} alt="Happy popcorn bucket" />
        <h1 className="title">CinemaQuest</h1>
      </div>
      <Route exact path="/" render={() => <Form grabInput={this.grabInput} clearFilteredMovies={this.clearFilteredMovies}/>} />
      {this.state.isLoading && !this.state.error && <h2 className="loading">Loading...</h2>}
      {this.state.error && <h2 className="error">Sorry, there was an error. Please come back later.</h2>}
      {this.state.searchedMovie && !this.state.filteredMovies.length && <h2 className='no-movies'>Sorry, no movies found. Please try again!</h2>}
      <Switch>
        <Route exact path='/' render={() => <Movies movies={movieData} />} />
        <Route exact path='/movies/:movieId' render={({ match }) => {
          return <SingleMovie movieID={match.params.movieId}/>
        }} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  )
 }
 
}


export default App;
