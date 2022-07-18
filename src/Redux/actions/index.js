import {
	GET_ALL_CHAMPS,
	GET_CHAMP_DETAIL,
	ADD_CHAMPS_FAVORITE,
	REMOVE_CHAMPS_FROM_FAVORITE,
	FILTER_CHAMPS,
	CLEAR_FAVORITES,
} from "../actions/actions-type.js";
import axios from "axios";

export function getChamps() {
	return function (dispatch) {
		axios
			.get(
				`https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json`
			)
			.then(({ data }) =>
				dispatch({
					type: GET_ALL_CHAMPS,
					payload: data.data,
				})
			);
	};
}

export function champDetails(champ) {
	return function (dispatch) {
		return axios
			.get(
				`http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/${champ}.json`
			)
			.then(res =>
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

// FILTER_CHAMPS
export function filterChamp(filterApplied) {
	return {
		type: FILTER_CHAMPS,
		payload: filterApplied,
	};
}

export function clearFavorites() {
	return {
		type: CLEAR_FAVORITES,
		payload: [],
	};
}
