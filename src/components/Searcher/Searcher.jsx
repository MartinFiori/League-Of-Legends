import React, { Component } from "react";
// CSS
import "./Searcher.css";
// SVGs
import SearchIcon from "../../svg/SearchIcon.jsx";
export default class Searcher extends Component {
	render() {
		return (
			<form onSubmit={e => e.preventDefault()} className="searchContainer">
				<div className="searchStyles">
					<input
						className="searchInput"
						placeholder="Search Champ"
						type="text"
						id="champName"
						autoComplete="off"
						onChange={e => this.props.handleSearchChamp(e.target.value)}
					/>
					<SearchIcon className="searchIcon" />
				</div>
			</form>
		);
	}
}
