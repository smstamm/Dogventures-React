import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "../style/theme.js";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import porchImg from "../images/about.jpg";

const muiTheme = getMuiTheme(theme);

export default class Home extends Component {
	render() {
		return (

			<MuiThemeProvider muiTheme={muiTheme}>
				<Card>
					<CardMedia>
						<img src={porchImg} />
					</CardMedia>
				</Card>

			</MuiThemeProvider>
		);
	}
}
					// <h1>Find the perfect companion<br />for your every adventure</h1>
					// <a>Adopt a co-pilot</a>