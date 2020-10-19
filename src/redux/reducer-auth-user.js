import { userAPI } from "../api/api";

const GET_CLIENTS = 'app/reducer-auth-user/GET_CLIENTS';
const LOADED_DATA = 'app/reducer-auth-user/LOADED_DATA';
const LOGOUT_CLIENT = 'app/reducer-auth-user/LOGOUT_CLIENT';
const ERROR_MESSAGE = 'app/reducer-auth-user/ERROR_MESSAGE';
const LOGIN_AUTH = 'app/reducer-auth-user/LOGIN_AUTH';
const PASSWORD_AUTH = 'app/reducer-auth-user/PASSWORD_AUTH';
const GET_CARD_ID = 'app/reducer-auth-user/GET_CARD_ID';

const initialState = {
	client: {},
	isFetch: false,
	cardId: null,
	login: '',
	password: '',
	validate: false,
	errorMessage: false,
	loaded: false,
};

export const reducerAuthUser = (
	state = initialState,
	action
) => {
	switch ( action.type ) {

		case GET_CLIENTS:
			const authClient =
				Object.keys(action.clients)
					.filter(key => action.clients[key].login === action.login
					&& action.clients[key].password === action.password ? action.clients[key] : null);
			return {
				...state,
				client: {...action.clients[authClient]},
				isFetch: true,
			};

		case LOADED_DATA:
			return {
				...state,
				loaded: action.loaded
			};

		case LOGIN_AUTH:
			return {
				...state, login: action.login.trim(),
			};

		case PASSWORD_AUTH:
			return {
				...state, password: action.password.trim(),
			}

		case GET_CARD_ID:
			return {
				...state, cardId: action.cardId
			}

		case LOGOUT_CLIENT:
			return {
				...state, client: {}, cardId: null, loaded: false, password: '', login: '',
				validate: false, errorMessage: false, isFetch: false
			}

		case ERROR_MESSAGE:
			return {
				...state,
				errorMessage: action.message ? [action.message] : action.message,
			};

		default:
			return state;
	}
};

const GetClient = (clients, login, password) => {
	return {
		type: GET_CLIENTS,
		clients,
		login,
		password,
	};
};

const LoadedData = (loaded) => {
	return {
		type: LOADED_DATA,
		loaded,
	}
};

const ErrorMessage = (message) => {
	return {
		type: ERROR_MESSAGE,
		message,
	};
};

const LoginAuth = (login) => {
	return {
		type: LOGIN_AUTH,
		login,
	}
};

const PasswordAuth = (password) => {
	return {
		type: PASSWORD_AUTH,
		password,
	}
};

const GetCardId = (cardId) => {
	return {
		type: GET_CARD_ID,
		cardId,
	}
};

const LogoutClient = () => {
	return {
		type: LOGOUT_CLIENT,
	}
};

export const GetClientThunkCreator = (login, password) => {
	return dispatch => {
		if ( login.trim() === '' || login.length < 3 ) {
			dispatch(ErrorMessage('Некорректный логин!'));
			return;
		}
		if ( password.trim() === '' || password.length < 8 ) {
			dispatch(ErrorMessage('Некорректный пароль!'));
			return;
		}
		dispatch(LoadedData(true));
		userAPI.authUser().then((response => {
			if (response.status === 200) {
				dispatch(GetClient(response.data.clientsList, login, password));
				dispatch(LoadedData(false));
				dispatch(ErrorMessage(false));
			}
		}));
	};
};

export const GetLoginThunkCreator = (login) => {
	return dispatch => {
		dispatch(LoginAuth(login));
	}
};

export const GetPasswordThunkCreator = (password) => {
	return dispatch => {
		dispatch(PasswordAuth(password));
	}
};

export const GetCardIdThunkCreator = (cardId) => {
	return dispatch => {
		dispatch(GetCardId(cardId));
	}
};

export const LogoutClientThunkCreator = () => {
	return dispatch => {
		dispatch(LogoutClient());
	}
};