import {
	GET_ALL_CHAMPS,
	GET_CHAMP_DETAIL,
	ADD_CHAMPS_FAVORITE,
	REMOVE_CHAMPS_FROM_FAVORITE,
	CLEAR_FAVORITES,
	CLEAR_DETAILS,
	SET_FILTER,
} from "../actions/actions-type.js";

const initialState = {
	allChamps: [],
	champs: [],
	rol: [],
	favorites: [],
	champDetail: {},
	filter: "All",
};

export default function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_CHAMPS:
			return {
				...state,
				allChamps: payload,
				champs: payload,
				rol: [
					"All",
					...new Set(
						Object.values(payload)
							.map(el => el.tags)
							.flat(1)
					),
				],
			};
		case ADD_CHAMPS_FAVORITE:
			return {
				...state,
				favorites: state.favorites.every(c => c.id !== payload.id)
					? [...state.favorites, payload]
					: state.favorites,
			};
		case REMOVE_CHAMPS_FROM_FAVORITE:
			return {
				...state,
				favorites: state.favorites.filter(champ => champ.id !== payload.id),
			};
		case CLEAR_FAVORITES:
			return {
				...state,
				favorites: payload,
			};
		case GET_CHAMP_DETAIL:
			return {
				...state,
				champDetail: payload,
			};
		case CLEAR_DETAILS:
			return {
				...state,
				champDetail: payload,
			};
		case SET_FILTER:
			return {
				...state,
				filter: payload.filter,
				champs: payload.newArr,
			};
		default:
			return state;
	}
}
