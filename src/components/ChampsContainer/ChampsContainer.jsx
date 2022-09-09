import React, { Component } from "react";
// CSS
import "./ChampsContainer.css";
// redux
import { connect } from "react-redux";
import { addChampToFavorites, getChamps, setFilter } from "../../Redux/actions";
// components
import Items from "../Items/Items.jsx";
import Filters from "../Filters/Filters";

export class ChampsContainer extends Component {
	componentDidMount() {
		this.props.champs.length === 0 && this.props.getChamps();
	}

	render() {
		return (
			<>
				<Filters />
				<div className="cardsContainer">
					{Object.values(this.props.champs)
						.filter(val => {
							if (this.props.champSearch === "") return val;
							if (
								val.id
									.toLowerCase()
									.includes(this.props.champSearch.toLowerCase())
							)
								return val;
						})
						.map(el => {
							return <Items key={el.id} data={el} />;
						})}
				</div>
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		champs: state.champs,
		favorites: state.favorites,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getChamps: () => dispatch(getChamps()),
		addChampToFavorites: champ => dispatch(addChampToFavorites(champ)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampsContainer);
