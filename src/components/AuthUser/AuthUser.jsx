import React from "react";
import classes from './AuthUser.module.css';
import { Button } from "../UI/Buttons/Button/Button";
import { NavLink } from "react-router-dom";

export const AuthUser = ({ login, password, ...props }) => {

	const handlerLogin = (event) => {
		props.getLogin(event.currentTarget.value.trim());
	};

	const handlerPassword = (event) => {
		props.getPassword(event.currentTarget.value.trim());
	};

	return (
		<div className={classes.AuthUser}>

			<div className={classes.AuthUserWrapper}>

				<div className={classes.AuthUserForm}>

					<h1>Авторизация</h1>

					<div className={classes.AuthForm}>
						<div className={classes.AuthUserFromLogin}>
							<label htmlFor={ 'login' }>Логин</label>
							<input
								value={login}
								onChange={handlerLogin}
								id={'login'}
								type={ 'text' }
								placeholder={'Логин'}/>
						</div>
						<div className={classes.AuthUserFromPassword}>
							<label htmlFor={ 'password' }>Пароль</label>
							<input
								value={password}
								onChange={handlerPassword}
								id={'password'}
								type={ 'text' }
								placeholder={'Пароль'}/>
						</div>

						<div className={classes.AuthUserFormBtn}>
							<Button
								onClick={props.setAuthClient}
								disabled={
									login.length > 3 && login !== '' && password.length >= 8 && password !== ''
										? false : true
								}
								styleButton={classes.StyleBtn}>Авторизоваться</Button>
						</div>

						<div className={classes.AuthUserFormBtnRegistration}>
							<NavLink to={'/registration'}>Зарегистрироваться</NavLink>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
};