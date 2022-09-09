import React, { Component } from "react";
// CSS
import "./ChampsContainer.css";
// redux
import { connect } from "react-redux";
import { addChampToFavorites, getChamps, setFilter } from "../../Redux/actions";
// components
import Items from "../Items/Items.jsx";

export class ChampsContainer extends Component {
	componentDidMount() {
		this.props.champs.length === 0 && this.props.getChamps();
	}

	render() {
		return (
			<>
				{this.props.rol.map(el => (
					<p
						key={el}
						style={{ fontSize: "30px", cursor: "pointer" }}
						onClick={() => this.props.setFilter(this.props.allChamps, el)}
					>
						{el}
					</p>
				))}
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
		allChamps: state.allChamps,
		champs: state.champs,
		favorites: state.favorites,
		rol: state.rol,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getChamps: () => dispatch(getChamps()),
		addChampToFavorites: champ => dispatch(addChampToFavorites(champ)),
		setFilter: (arr, filterType) => dispatch(setFilter(arr, filterType)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampsContainer);
