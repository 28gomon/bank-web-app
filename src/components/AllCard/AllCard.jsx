import React from "react";
import classes from './AllCard.module.css';
import { imageArray } from "../HomePage/HomePage";
import { NavLink } from "react-router-dom";

export const AllCard = ( props ) => {
	return (
		<div className={ classes.AllCard }>

			<div className={ classes.AllCardItems }>
				{
					props.cards.map(( card, index ) => {
						return (
							<div key={ index } className={ classes.AllCardItem }>
								<NavLink to={ '/more/' + card.id } title={card.title}>
									<div>
										<div className={ classes.AllCardImage }>
											<img src={ `${ imageArray[ index ] }` } alt={ card.title }/>
										</div>
										<div className={ classes.AllCardDescription }>
											<h2>{ card.title }</h2>
											<p>{ card.description }</p>
										</div>
									</div>
								</NavLink>
							</div>
						)
					})
				}
			</div>

		</div>
	)
};