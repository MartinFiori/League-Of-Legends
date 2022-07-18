import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<img
					className="logo"
					src="https://res.cloudinary.com/dax0wf30d/image/upload/v1658103578/shit/porofinal_ikmafw.png"
					alt="Logo"
				/>
				<NavLink to="/favorites">vamo a lo favorito</NavLink>
				<br />
				<NavLink to="/">vamo a lo champs</NavLink>
			</nav>
		);
	}
}
