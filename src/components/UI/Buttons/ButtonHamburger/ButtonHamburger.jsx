import React, { useEffect, useState } from 'react';
import classes from './ButtonHamburger.module.css'

export const ButtonHamburger = (props) => {

	let cls = [classes.ButtonHamburger];

	const [active, setActive] = useState(false);

	useEffect(() => {
		setActive(props.toggleNav);
	}, [props.toggleNav]);

	if (active) cls.push(classes.ActiveNav);

	const handlerOnClickButton = () => {
		props.onClick(!props.toggleNav);
		setActive(!props.toggleNav);
	};

	return (
		<div
			onClick={handlerOnClickButton}
			className={cls.join(' ')}
		><span/></div>
	)
};