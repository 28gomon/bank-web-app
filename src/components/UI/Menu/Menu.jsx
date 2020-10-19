import React from 'react';
import classes from './Menu.module.css';
import { BackDrop } from "../BackDrop/BackDrop";
import { NavLink } from "react-router-dom";
import { Button } from "../Buttons/Button/Button";

const Menu = ( props ) => {

	let cls = [ classes.Menu ];

	if ( props.toggleNav ) cls.push(classes.ActiveMenu);

	const handleToggleNav = () => {
		props.handlerToggleNav(false);
	};

	return (
		<>
			<div className={ cls.join(' ') }>

				<div className={classes.NavHeader}>
					{
						Object.keys(props.client).length !== 0 ?
							<div className={classes.NavHeaderClientInfo}>
								<div className={classes.NavHeaderClientName}>
									Здравствуйте <span>{props.client.userInf.personalData.firstName}</span>
								</div>
								<div className={classes.NavHeaderClientBtnGroup}>
									<div><NavLink to={'/client-office'}>Личный кабинет</NavLink></div>
									<div><Button>Выйти</Button></div>
								</div>
							</div>
							: <div>By</div>
					}
				</div>

				<div className={classes.NavWrapper}>
					<nav className={classes.Nav}>
						<div><NavLink
							onClick={handleToggleNav}
							to={'/all-cards'}>Выбрать карту</NavLink></div>
						<div><NavLink
							onClick={handleToggleNav}
							to={'/'}>Карты банка</NavLink></div>
						<div><NavLink
							onClick={handleToggleNav}
							to={'/'}>Карты банка</NavLink></div>
						<div><NavLink
							onClick={handleToggleNav}
							to={'/'}>Карты банка</NavLink></div>
					</nav>
				</div>

			</div>
			{props.toggleNav && <BackDrop onClick={handleToggleNav} />}
		</>
	)
};

export default Menu;