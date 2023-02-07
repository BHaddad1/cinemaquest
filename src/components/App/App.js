import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Form from '../Form/Form';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import getData from '../../apiCalls/api';
import Error from '../Error/Error';

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

 render() {
  return (
    <div>
      <Form />
      {this.state.isLoading && !this.state.error && <h2 className="loading">Loading...</h2>}
      {this.state.error && <h2 className="error">Sorry, there was an error. Please come back later.</h2>}
      <Switch>
        <Route exact path='/' render={() => <Movies movies={this.state.allMovies} />} />
        <Route exact path='/movies/:movieId' render={({ match }) => {
          return <SingleMovie movieID={match.params.movieId}/>
        }} />
        <Route path="/*" render={() => <Error />} />
      </Switch>
    </div>
  )
 }
 
}


export default App;
