import React, { Component } from "react";

export default class Searcher extends Component {
	render() {
		return (
			<form onSubmit={e => e.preventDefault()}>
				<label htmlFor="champName">Champ's name:</label>
				<input
					type="text"
					id="champName"
					autoComplete="off"
					onChange={e => this.props.handleSearchChamp(e.target.value)}
				/>
				<input type="button" value="Buscar" />
			</form>
		);
	}
}
