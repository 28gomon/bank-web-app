import { cardAPI } from "../api/api";

const GET_CARD_DETAIL = 'app/reducer-card-detail/GET_CARD_DETAIL';
const LOADED_CARD_DATA = 'app/reducer-card-detail/LOADED_CARD_DATA';

const initialState = {
	card: {},
	loaded: false,
};

export const reducerCardDetail = ( state = initialState, action ) => {
	switch ( action.type ) {

		case GET_CARD_DETAIL:
			return {
				...state,
				card: {...state.card, ...action.cards.find(card => card.id === action.id)},
			};

		case LOADED_CARD_DATA:
			return {
				...state,
				loaded: action.isFetch,
			};

		default:
			return state;
	}
};

const getCardDetail = (cards, id) => {
	return {
		type: GET_CARD_DETAIL,
		cards,
		id,
	}
};

const loadedCardData = (isFetch) => {
	return {
		type: LOADED_CARD_DATA,
		isFetch,
	}
};

export const getCardDetailThunkCreator = (id) => {
	return dispatch => {
		dispatch(loadedCardData(true));
		cardAPI.getCard().then(response => {
			try {
				if (response.status === 200) {
					dispatch(getCardDetail(response.data, id));
					dispatch(loadedCardData(false));
				}
			} catch ( e ) {
				throw new Error(e);
			}
		});
	}
};