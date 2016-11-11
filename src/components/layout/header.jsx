import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "../../style/theme.js";
import AppBar from "material-ui/AppBar";

import porchImg from "../../images/about.jpg";

const muiTheme = getMuiTheme(theme);

export default class Header extends Component {
	render() {
		return (

			<MuiThemeProvider muiTheme={muiTheme}>
				<AppBar />
			</MuiThemeProvider>
		);
	}
}