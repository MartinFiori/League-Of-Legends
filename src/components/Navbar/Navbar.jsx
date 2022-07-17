import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<h2>SOY EL MADAFUKING NABAR</h2>
				<Link to="/favorites">vamo a lo favorito</Link>
				<br />
				<Link to="/">vamo a lo champs</Link>
			</nav>
		);
	}
}
