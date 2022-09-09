import {
	GET_ALL_CHAMPS,
	GET_CHAMP_DETAIL,
	ADD_CHAMPS_FAVORITE,
	REMOVE_CHAMPS_FROM_FAVORITE,
	CLEAR_FAVORITES,
	CLEAR_DETAILS,
	SET_FILTER,
} from "../actions/actions-type.js";
import axios from "axios";

export function getChamps() {
	return function (dispatch) {
		axios(
			`https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json`
		).then(({ data }) =>
			dispatch({
				type: GET_ALL_CHAMPS,
				payload: data.data,
			})
		);
	};
}

export function champDetails(champ) {
	return function (dispatch) {
		return axios(
			`https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/${champ}.json`
		).then(res =>
			dispatch({
				type: GET_CHAMP_DETAIL,
				payload: res.data.data,
			})
		);
	};
}

export function addChampToFavorites(champ) {
	return {
		type: ADD_CHAMPS_FAVORITE,
		payload: champ,
	};
}

export function removeChampFromFavorites(champ) {
	return {
		type: REMOVE_CHAMPS_FROM_FAVORITE,
		payload: champ,
	};
}

export function clearFavorites() {
	return {
		type: CLEAR_FAVORITES,
		payload: [],
	};
}

export function clearDetails() {
	return {
		type: CLEAR_DETAILS,
		payload: {},
	};
}

export function setFilter(arr, filterType) {
	return function (dispatch) {
		const filter =
			filterType === "All"
				? arr
				: Object.values(arr).filter(el => el.tags.includes(filterType));
		dispatch({
			type: SET_FILTER,
			payload: {
				filter: filterType,
				newArr: filter,
			},
		});
	};
}
