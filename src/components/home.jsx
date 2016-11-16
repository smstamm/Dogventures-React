import React, { Component } from "react";
import { browserHistory } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "../style/theme.js";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

const muiTheme = getMuiTheme(theme);

export default class Home extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<div id="hero">
						<div id="hero-overlay" />
					</div>
					<div id="hero-content">
						<h1 id="hero-heading">Find the perfect companion for your every adventure</h1>
						<RaisedButton id="hero-btn" label="Adopt a co-pilot" primary={true} onClick={() => {browserHistory.push("zip")}} />
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}