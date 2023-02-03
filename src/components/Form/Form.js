import React, {Component} from "react";
import './Form.css';
import icon from '../../images/popcorn.png'

class Form extends Component {
    constructor() {
        super();
        this.state = {
					title: ''
        }
    }

		handleChange = (event) => {
			const { name, value } = event.target;
			this.setState({[name]: value})
		}

		handleClick = () => {
			console.log("Return and fix");
		}

    render() {
			return (
				<header>
					<img src={icon} alt="Happy popcorn bucket"/> 
					<h1>CinemaQuest</h1>
					<input 
						type='text'
						placeholder="Movie Title"
						value={this.state.title}
						name="title"
						onChange={(event) => this.handleChange(event)}
					/>
					<button onClick={this.handleClick}>Search</button>
				</header>    
        )
			}
		}

export default Form;