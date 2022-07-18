import React, { Component } from "react";
// CSS
import "./ChampDetailContainer.css";
// redux
import { connect } from "react-redux";
import { champDetails } from "../../Redux/actions";

class ChampDetailContainer extends Component {
	componentDidMount() {
		// const id = this.props.match.params.id;
		// this.props.champDetails(id);
		const studentId = window.location.href.split("/")[4];
		this.props.champDetails(studentId);
	}
	render() {
		return (
			<div className="detailPage">
				{Object.values(this.props.champDetail).map(el => {
					const { name, description } = el.passive;
					const { full } = el.passive.image;
					return (
						<div key={el.id} className="detailContainer">
							<img
								src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${el.id}_0.jpg`}
								alt={`${el.name}`}
								className="detailBg"
							/>
							<div className="detailContent">
								<p className="detail--name">{el.name}</p>
								<p className="detail--title">{el.title}</p>
								<div className="detail__info">
									<section className="detail__info--lore">
										<p className="loreTitle">Lore</p>
										<p className="lore">{el.lore}</p>
									</section>
									<section className="detail__info--skills">
										<p className="skillTitle">Skills</p>
										<ul>
											<li key={name} className="skill--item">
												<img
													src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/passive/${full}`}
													alt=""
												/>
												<p>
													<span className="spell--name">{name}</span>:{" "}
													{description}
												</p>
											</li>
											{el.spells.map(spell => (
												<li key={spell.id} className="skill--item">
													<img
														src={`https://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/${spell.id}.png`}
														alt={`${spell.name}`}
													/>
													<p>
														<span className="spell--name">{spell.name}</span>:{" "}
														{spell.description}
													</p>
												</li>
											))}
										</ul>
									</section>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		champDetail: state.champDetail,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		champDetails: champ_id => dispatch(champDetails(champ_id)),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChampDetailContainer);
