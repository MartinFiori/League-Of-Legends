import React, { Component } from "react";
// redux
import { connect } from "react-redux";
import { removeChampFromFavorites, clearFavorites } from "../../Redux/actions";

export class FavoritesChamps extends Component {
	render() {
		return (
			<div>
				{this.props.favorites.map(el => (
					<div key={el.id}>
						<p>{el.name}</p>
						<button onClick={() => this.props.removeChampFromFavorites(el)}>
							Remove
						</button>
					</div>
				))}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		favorites: state.favorites,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		removeChampFromFavorites: champ =>
			dispatch(removeChampFromFavorites(champ)),
		clearFavorites: () => dispatch(clearFavorites()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesChamps);
