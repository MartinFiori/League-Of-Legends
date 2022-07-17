import {
	GET_ALL_CHAMPS,
	GET_CHAMP_DETAIL,
	ADD_CHAMPS_FAVORITE,
	REMOVE_CHAMPS_FROM_FAVORITE,
	FILTER_CHAMPS,
	CLEAR_FAVORITES,
} from "../actions/actions-type.js";

const initialState = {
	allChamps: [],
	foundChamp: [],
	favorites: [],
	champDetail: {},
	filtered: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_CHAMPS:
			return {
				...state,
				allChamps: payload,
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
		case FILTER_CHAMPS:
			return {
				...state,
				filtered: state.allChamps.filter(champ => champ.name === payload),
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
		default:
			return state;
	}
}
