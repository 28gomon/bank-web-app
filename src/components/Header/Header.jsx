import React, { useEffect, useState } from 'react';
import classes from './Header.module.css';
import { Logo } from "../UI/Logo/Logo";
import { Phone } from "../UI/Phone/Phone";
import { ButtonHamburger } from "../UI/Buttons/ButtonHamburger/ButtonHamburger";
import Menu from "../UI/Menu/Menu";

const phoneNumber = '8 500 800 000';

export const Header = ( props ) => {

	const [toggleNav, setToggleNav] = useState(false);

	useEffect(() => {
		setToggleNav(props.activeMenu);
	}, [props.activeMenu]);

	const handlerToggleNav = (value) => {
		setToggleNav(value);
		props.activeMenuAction(value);
	};

	return (
		<>
			<div className={ classes.Header }>

				<div className={ classes.HeaderWrapper }>

					<Logo/>

					<div className={ classes.HeaderRightSection }>
						<Phone
							stylePhone={ classes.HeaderPhone }
							phoneNumber={ phoneNumber }
						/>
						<ButtonHamburger
							toggleNav={ toggleNav }
							onClick={ handlerToggleNav }
						/>
					</div>
				</div>

			</div>
			<Menu
				client={props.client}
				isFetch={props.isFetch}
				toggleNav={ toggleNav }
				handlerToggleNav={handlerToggleNav}
			/>
		</>
	)
};

