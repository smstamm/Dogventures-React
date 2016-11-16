import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "../../style/theme.js";
import { Link } from "react-router";
// COMPONENTS
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import SvgIcon from "material-ui/SvgIcon";

import porchImg from "../../images/about.jpg";
import pawIcon from "../../images/paw.png";

const muiTheme = getMuiTheme(theme);

export default class Header extends Component {
	render() {
		return (

			<MuiThemeProvider muiTheme={muiTheme}>
				<AppBar
					style={{width: "auto"}}
					title="Dogventures"
					iconElementRight={
						<div>
							<Link to="home"><FlatButton label="Home" /></Link>
							<Link to="about"><FlatButton label="About" /></Link>
							<Link to="zip"><FlatButton label="Adopt" /></Link>
						</div>
					} />
			</MuiThemeProvider>
		);
	}
}