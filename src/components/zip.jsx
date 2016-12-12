import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "../style/theme.js";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const muiTheme = getMuiTheme(theme);

export default class Zip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zipcode: ""
		}

	}

	onInputChange(event) {
		event.preventDefault();
		this.setState({
			zipcode: event.target.value
		});
	}

	zipcodeSubmit() {
		this.props.zipcodeSubmit(this.state.zipcode);
	}

	render() {
		return (

			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<div id="hero">
						<div id="hero-overlay" />
					</div>
					<div id="hero-content">
						<h1>Enter your zipcode to browse adoptable dogs in your area</h1>
						<br />
						<TextField type="text" placeholder="Zipcode" className="zip-input" onBlur={this.onInputChange} required autofocus />
						<RaisedButton type="submit" label="Submit" primary={true} onClick={this.zipcodeSubmit} />
					</div>
					<h2 class="alert alert-warning" role="alert">Please enter a valid zipcode within the US or Canada</h2>
				</div>
			</MuiThemeProvider>
		);
	}
}
