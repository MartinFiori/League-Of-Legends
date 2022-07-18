import React, { Component } from "react";
// React-router-dom
import { NavLink } from "react-router-dom";
// Css
import "./Navbar.css";
// SVGs
import Swords from "../../svg/Swords.jsx";
import Star from "../../svg/Star.jsx";

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<section className="isologotype">
					<img
						className="logo"
						src="https://res.cloudinary.com/dax0wf30d/image/upload/v1658103578/shit/porofinal_ikmafw.png"
						alt="Logo"
					/>
					<h1>Rito Pls</h1>
				</section>
				<section className="nav__links">
					<NavLink to="/" className={"nav__anchor"}>
						<Swords className="nav__link--icon sword" />
						<p className="nav__anchor--text">Champs</p>
					</NavLink>
					<NavLink to="/favorites" className={"nav__anchor"}>
						<Star className="nav__link--icon" />
						<p className="nav__anchor--text">Favorites</p>
					</NavLink>
				</section>
			</nav>
		);
	}
}
