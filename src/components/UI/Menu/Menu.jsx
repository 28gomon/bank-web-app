import React from 'react';
import classes from './Menu.module.css';
import { BackDrop } from "../BackDrop/BackDrop";
import { NavLink } from "react-router-dom";

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
					Header Nav
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