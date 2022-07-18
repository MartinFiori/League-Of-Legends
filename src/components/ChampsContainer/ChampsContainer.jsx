import React, { Component } from "react";
// CSS
import "./ChampsContainer.css";
// redux
import { connect } from "react-redux";
import { addChampToFavorites, getChamps } from "../../Redux/actions";
// React-router-dom
import { Link } from "react-router-dom";
// SVGs
import Star from "../../svg/Star.jsx";

export class ChampsContainer extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.allChamps.length === 0 && this.props.getChamps();
	}
	prueba(el) {
		el.tags.map();
		console.log(el.tags);
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
					.map(el => (
						<div key={el.id} className="card">
							<img
								className="card--img"
								src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${el.id}_0.jpg`}
								alt={el.name}
							/>
							<section className="card--description">
								<div className="card__header">
									<h2 className="card__header--name">{el.name}</h2>
									<ul className="card__header--tags">
										{el.tags.map(rol => {
											return (
												<li className="card__tags--item" key={rol}>
													{rol}
												</li>
											);
										})}
									</ul>
								</div>
								<h3 className="card__title">{el.title}</h3>
								<div className="card__buttons">
									<Link
										to={`/details/${el.id}`}
										className="card__buttons--button button--link"
									>
										<button className="card__buttons--button button--info">
											Ver descripción
										</button>
									</Link>
									<button
										className="card__buttons--button button--favorite"
										onClick={() =>
											this.props.addChampToFavorites({
												name: el.name,
												img: el.image.full,
												id: el.id,
											})
										}
									>
										<Star className="favIcon" />
									</button>
								</div>
							</section>
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
