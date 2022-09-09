import React, { Component } from "react";
// CSS
import "./FavoritesChamps.css";
// redux
import { connect } from "react-redux";
import { removeChampFromFavorites, clearFavorites } from "../../Redux/actions";
// SVGs
import TrashCan from "../../svg/TrashCan.jsx";

export class FavoritesChamps extends Component {
	render() {
		return (
			<div className="favoritesContainer">
				{this.props.favorites.map(el => (
					<div key={el.id} className="favCard">
						<img
							className="favCard--img"
							src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${el.img}`}
							alt={`${el.name}-logo`}
						/>
						<section className="favCard__info">
							<p className="favCard__info--name">{el.name}</p>
							<p className="favCard__info--title">{el.title}</p>
						</section>
						<button
							className="favCard--btn"
							onClick={() => this.props.removeChampFromFavorites(el)}
						>
							<TrashCan className="fav--TrashCan" />
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
