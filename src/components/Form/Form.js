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
    this.setState({ [event.target.name]: event.target.value }, () => this.props.grabInput(this.state.title));
  }

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
  };
};

export default Form;

Form.propTypes = {
  grabInput: PropTypes.func.isRequired,
  clearFilteredMovies: PropTypes.func.isRequired,
}