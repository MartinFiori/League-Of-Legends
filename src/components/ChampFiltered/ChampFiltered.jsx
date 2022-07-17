import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { filterChamp } from "../../Redux/actions";

export class ChampFiltered extends Component {
	render() {
		return (
			<div>
				<button onClick={() => console.log(this.props)}>botoneame</button>
				<h1>{this.props.filtered.name}</h1>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		filtered: state.filtered,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		filterChamp: filter => dispatch(filterChamp(filter)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampFiltered);
