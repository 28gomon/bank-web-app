import { cardAPI } from "../api/api";

const GET_CARD_SLIDER = 'app/slider/GET_CARD_SLIDER';
const LOADED_CARD_DATA = 'app/slider/LOADED_CARD_DATA';

const initialState = {
	cards: null,
	loaded: false
};

export const reducerSlider = (state = initialState, action) => {
	switch ( action.type ) {

		case GET_CARD_SLIDER:
			return {
				...state, cards: action.cards
			};

		case LOADED_CARD_DATA:
			return {
				...state, loaded: action.load
			};

		default:
			return state;
	}
};

const getCardInformation = (cards) => {
	return {
		type: GET_CARD_SLIDER,
		cards
	}
};

const loadedData = (load) => {
	return {
		type: LOADED_CARD_DATA,
		load
	}
};

export const getCardInformationThunkCreator = () => {
	return dispatch => {
		dispatch(loadedData(true));
		cardAPI.getCard().then(response => {
			if (response.status === 200) {
				dispatch(getCardInformation(response.data));
			}
			dispatch(loadedData(false));
		});
	}
};