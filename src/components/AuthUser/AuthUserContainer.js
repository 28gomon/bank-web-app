import React from "react";
import { connect } from "react-redux";
import { AuthUser } from "./AuthUser";
import { withRouter, Redirect } from "react-router-dom";
import {
	GetClientThunkCreator,
	GetLoginThunkCreator,
	GetPasswordThunkCreator
} from "../../redux/reducer-auth-user";

const AuthUserContainer = ( { login, password, ...props }) => {

	const setAuthClient = () => {
		props.getClient(login, password);
		localStorage.setItem('login', login);
		localStorage.setItem('password', password);
	};

	if (props.loaded) {
		return <Redirect to={'/all-cards'}/>
	}

	return (
		<AuthUser
			login={login}
			password={password}
			setAuthClient={setAuthClient}
			{...props}
		/>
	)
};

const mapStateToProps = (state) => {
	return {
		client: state.reducerAuthUser.client,
		login: state.reducerAuthUser.login,
		password: state.reducerAuthUser.password,
		errorMessage: state.reducerAuthUser.errorMessage,
		loaded: state.reducerAuthUser.loaded,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getClient: (login, password) => dispatch(GetClientThunkCreator(login, password)),
		getLogin: (login) => dispatch(GetLoginThunkCreator(login)),
		getPassword: (password) => dispatch(GetPasswordThunkCreator(password)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthUserContainer));