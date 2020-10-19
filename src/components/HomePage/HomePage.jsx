import React from 'react';
import Slider from 'react-slick';
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './HomePage.module.css';

import cardImage from '../../assets/image/card-1.png';

export const imageArray = [ cardImage, cardImage ];

export const HomePage = ( props ) => {

	const settingsSlider = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchMove: true,
		autoplay: true,
		autoplaySpeed: 3000
	};

	return (
		<div className={ classes.HomeSlider }>

			<Slider { ...settingsSlider } >
				{
					props.cardInfo.map(( card, index ) => {
						return (
							<div key={ index }>
								<div className={ classes.SliderItem }>
									<div className={ classes.SliderItemLeftBlock }>
										<img src={ `${ imageArray[ index ] }` } alt={ card.title }/>
									</div>
									<div className={ classes.SliderItemRightBlock }>
										<div>
											<h2>{ card.title }</h2>
											<p>{ card.description }</p>

											<div className={ classes.SliderItemButtonGroup }>
												<NavLink to={ '/card/' + card.id }
														 className={ classes.ButtonChoice }>
													Выбрать</NavLink>
												<NavLink to={ '/more/' + card.id }
														 className={ classes.ButtonMore }>
													Подробнее</NavLink>
											</div>
										</div>
									</div>
								</div>
							</div>
						)
					})
				}
			</Slider>

		</div>
	)
};