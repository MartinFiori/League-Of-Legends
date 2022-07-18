import React, { Component } from "react";
// CSS
import "./ChampsContainer.css";
// redux
import { connect } from "react-redux";
import { addChampToFavorites, getChamps } from "../../Redux/actions";
// components
import Items from "../Items/Items";

export class ChampsContainer extends Component {
	componentDidMount() {
		this.props.allChamps.length === 0 && this.props.getChamps();
	}

	render() {
		return (
			<div className="cardsContainer">
				{Object.values(this.props.allChamps)
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
		);
	}
}

function mapStateToProps(state) {
	return {
		allChamps: state.allChamps,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getChamps: () => dispatch(getChamps()),
		addChampToFavorites: champ => dispatch(addChampToFavorites(champ)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampsContainer);
