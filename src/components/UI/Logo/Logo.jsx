import React from 'react';
import classes from './Logo.module.css';
import { NavLink } from 'react-router-dom';
import logoImage from '../../../assets/image/logo.png';

export const Logo = () => {
	return (
		<div className={classes.Logo}>
			<NavLink to={'/'} >
				<img src={logoImage} alt={''} />
				<p>Банк<span> Лучшее решение</span></p>
			</NavLink>
		</div>
	)
};