import React, { Component } from "react";
// redux
import { connect } from "react-redux";
import { addChampToFavorites, getChamps } from "../../Redux/actions";
// React-router-dom
import { Link } from "react-router-dom";
// CSS
import "./ChampsContainer.css";

export class ChampsContainer extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.allChamps.length === 0 && this.props.getChamps();
	}
	render() {
		return (
			<div>
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
					.map(el => (
						<div key={el.id}>
							<Link to={`/details/${el.id}`}>
								<h2>{el.name}</h2>
							</Link>
							<h3>{el.title}</h3>
							<img
								className="img"
								src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${el.id}_0.jpg`}
								alt={el.name}
							/>
							<button
								onClick={() =>
									this.props.addChampToFavorites({
										name: el.name,
										img: el.image.full,
										id: el.id,
									})
								}
							>
								Fav
							</button>
						</div>
					))}
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
