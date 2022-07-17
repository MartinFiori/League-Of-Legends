import React, { Component } from "react";
// Components
import Searcher from "../Searcher/Searcher.jsx";
import ChampsContainer from "../ChampsContainer/ChampsContainer.jsx";

export default class ChampBrowser extends Component {
	constructor() {
		super();
		this.state = {
			champSearch: "",
		};
	}
	handleSearchChamp = value => {
		this.setState({ champSearch: value.trim() });
	};

	render() {
		return (
			<div>
				<h1>Ligo Leyens APU</h1>
				<Searcher handleSearchChamp={this.handleSearchChamp} />
				<ChampsContainer champSearch={this.state.champSearch} />
			</div>
		);
	}
}
