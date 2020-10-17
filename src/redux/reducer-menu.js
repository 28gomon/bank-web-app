const ACTIVE_MENU = 'app/menu/ACTIVE_MENU';

const initialState = {
	active: false
};

export const reducerMenu = (state = initialState, action) => {
	switch ( action.type ) {

		case ACTIVE_MENU:
			return {
				...state, active: action.active
			};

		default:
			return state;
	}
};

const activeMenu = (active) => {
	return {
		type: ACTIVE_MENU,
		active
	}
};

export const activeMenuThunkCreator = (active) => {
	return dispatch => {
		dispatch(activeMenu(active));
	}
};