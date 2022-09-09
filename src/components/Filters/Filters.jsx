import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "../../Redux/actions";
import s from "./Filters.module.css";

class Filters extends Component {
	constructor() {
		super();
		this.state = {
			actualFilter: "All",
		};
	}
	handleSetFilter(filterType) {
		this.props.setFilter(this.props.allChamps, filterType);
		this.setState({ actualFilter: filterType });
	}
	render() {
		return (
			<section className={s.filtersContainer}>
				<h3 className={s.title}>Filters:</h3>
				<ul className={s.filtersList}>
					{this.props.rol?.map(el => (
						<li
							key={el}
							className={`${s.filtersList__item} ${
								this.state.actualFilter === el ? s.active : ""
							}`}
							onClick={() => this.handleSetFilter(el)}
						>
							{el}
						</li>
					))}
				</ul>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		allChamps: state.allChamps,
		champs: state.champs,
		rol: state.rol,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setFilter: (arr, filterType) => dispatch(setFilter(arr, filterType)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
