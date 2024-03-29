import React, { Component } from "react";
// CSS
import "./ChampDetailContainer.css";
// redux
import { connect } from "react-redux";
import { champDetails, clearDetails } from "../../Redux/actions";
// Components
import ChampDetailItems from "../ChampDetailItems/ChampDetailItems.jsx";

class ChampDetailContainer extends Component {
	componentDidMount() {
		const studentId = window.location.href.split("/")[4];
		this.props.champDetails(studentId);
	}
	componentWillUnmount() {
		this.props.clearDetails();
	}
	render() {
		return (
			<div className="detailPage">
				{Object.values(this.props.champDetail).map(el => {
					return <ChampDetailItems data={el} key={el.id} />;
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
		clearDetails: () => dispatch(clearDetails()),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChampDetailContainer);
