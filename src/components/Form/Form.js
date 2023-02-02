import React, {Component} from "react";

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
            	<img src="./public/favicon.ico" alt="Happy popcorn bucket"/> 
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