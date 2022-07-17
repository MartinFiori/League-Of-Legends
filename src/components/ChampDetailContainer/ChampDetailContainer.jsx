import React, { Component } from "react";

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
			<div>
				{Object.values(this.props.champDetail).map(el => (
					<div key={el.id}>
						<p>{el.name}</p>
						<p>{el.lore}</p>
						<img
							src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${el.id}.png`}
							alt=""
						/>
					</div>
				))}
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
