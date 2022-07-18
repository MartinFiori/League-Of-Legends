import React, { Component } from "react";
import "./Items.css";
// React-router-dom
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { addChampToFavorites } from "../../Redux/actions";
// SVGs
import Star from "../../svg/Star.jsx";

class Items extends Component {
	render() {
		return (
			<div key={this.props.data.id} className="card">
				<img
					className="card--img"
					src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.data.id}_0.jpg`}
					alt={this.props.data.name}
				/>
				<section className="card--description">
					<div className="card__header">
						<h2 className="card__header--name">{this.props.data.name}</h2>
						<ul className="card__header--tags">
							{this.props.data.tags.map(rol => {
								return (
									<li className="card__tags--item" key={rol}>
										{rol}
									</li>
								);
							})}
						</ul>
					</div>
					<h3 className="card__title">{this.props.data.title}</h3>
					<div className="card__buttons">
						<Link
							to={`/details/${this.props.data.id}`}
							className="card__buttons--button button--link"
						>
							<button className="card__buttons--button button--info">
								View Description
							</button>
						</Link>
						<button
							className="card__buttons--button button--favorite"
							onClick={() =>
								this.props.addChampToFavorites({
									name: this.props.data.name,
									img: this.props.data.image.full,
									id: this.props.data.id,
									title: this.props.data.title,
								})
							}
						>
							<Star className="favIcon" />
						</button>
					</div>
				</section>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addChampToFavorites: champ => dispatch(addChampToFavorites(champ)),
	};
}

export default connect(null, mapDispatchToProps)(Items);
