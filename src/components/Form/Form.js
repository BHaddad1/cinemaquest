import React, { Component } from "react";
import "./Form.css";
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
    const title = this.state.title;
    this.props.grabInput(title)
  };
 clearInputs = (e) => {
  e.preventDefault();
  this.setState({title: ''})
  this.props.clearFilteredMovies()
 }

  render() {
    return (
      <section className="search-bar">
        <div className="search-wrapper"> 
          <input
            type="text"
            placeholder="Movie Title"
            value={this.state.title}
            name="title"
            onChange={(event) => this.handleChange(event)}
            className="search-field"
           />
          <button className="button" onClick={(e) =>this.clearInputs(e)}>
            Clear
          </button>
        </div>
      </section>
    );
  }
}

export default Form;

Form.propTypes = {
  grabInput: PropTypes.func.isRequired,
  clearFilteredMovies: PropTypes.func.isRequired,
}