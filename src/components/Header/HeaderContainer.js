import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { activeMenuThunkCreator } from "../../redux/reducer-menu";
import { GetClientThunkCreator, LogoutClientThunkCreator } from "../../redux/reducer-auth-user";

const HeaderContainer = (props) => {

	useEffect(() => {
		if (localStorage.length !== 0) {
			props.getClient(localStorage.getItem('login'), localStorage.getItem('password'));
		}
		// eslint-disable-next-line
	}, []);

	const [client, setClient] = useState({});
	useEffect(() => {
		setClient(props.client);
	}, [props.client]);

	const handlerLogoutClient = () => {
		props.logoutClient();
		if (localStorage.length !== 0) {
			delete localStorage.login;
			delete localStorage.password;
		}
	};

	return (
		<Header
			{...props}
			client={client}
			handlerLogoutClient={handlerLogoutClient}
		/>
	)
};

const mapStateToProps = (state) => {
	return {
		activeMenu: state.reducerHeader.active,
		isFetch: state.reducerAuthUser.isFetch,
		client: state.reducerAuthUser.client,
		login: state.reducerAuthUser.login,
		password: state.reducerAuthUser.password,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		activeMenuAction: (active) => dispatch(activeMenuThunkCreator(active)),
		getClient: (login, password) => dispatch(GetClientThunkCreator(login, password)),
		logoutClient: () => dispatch(LogoutClientThunkCreator()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);