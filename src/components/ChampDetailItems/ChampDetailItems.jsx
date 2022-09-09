import React, { Component } from "react";

class ChampDetailItems extends Component {
	render() {
		return (
			// name title lore id spells
			<div className="detailContainer">
				<img
					src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.data.id}_0.jpg`}
					alt={`${this.props.data.name}`}
					className="detailBg"
				/>
				<div className="detailContent">
					<p className="detail--name">{this.props.data.name}</p>
					<p className="detail--title">{this.props.data.title}</p>
					<div className="detail__info">
						<section className="detail__info--lore">
							<p className="loreTitle">Lore</p>
							<p className="lore">{this.props.data.lore}</p>
						</section>
						<section className="detail__info--skills">
							<p className="skillTitle">Skills</p>
							<ul>
								<li key={this.props.data.name} className="skill--item">
									<img
										src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/passive/${this.props.data.passive.image.full}`}
										alt={this.props.data.passive.image.full}
									/>
									<p>
										<span className="spell--name">{this.props.data.name}</span>:{" "}
										{this.props.data.passive.description}
									</p>
								</li>
								{this.props.data.spells.map(spell => (
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
	}
}

export default ChampDetailItems;
