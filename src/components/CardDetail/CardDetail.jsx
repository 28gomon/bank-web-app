import React from "react";
import classes from './CardDetail.module.css';
import { imageArray } from "../HomePage/HomePage";
import { NavLink } from "react-router-dom";

const listIcon = ['fa-percent', 'fa-credit-card', 'fa-shopping-cart', 'fa-smile-o'];

export const CardDetail = ( { card } ) => {

	return (
		<div className={ classes.CardDetail }>

			<div className={ classes.CardDetailHeader }>
				<div className={ classes.CardDetailHeaderImage }>
					<img src={ `${ imageArray[ card.id - 1 ] }` } alt={ card.title }/>
				</div>
				<div className={ classes.CardDetailHeaderInfo }>
					<h1>{ card.title }</h1>
					<p>{ card.description }</p>
					<div className={ classes.CardDetailHeaderButtonGroup }>
						<NavLink
							className={ classes.CardDetailBtnListCard }
							to={ '/all-cards' }>Список карт</NavLink>
						<NavLink
							className={ classes.CardDetailBtnOrderCard }
							to={ '/order-card/' + card.id }>Заказать карту</NavLink>
					</div>
				</div>
			</div>

			<div className={ classes.CardDetailTizer }>
				<h2>{ card.advantages.title }</h2>

				<div className={classes.CardDetailTizerItems}>
					{
						card.advantages.list.map((tizer, index) => {
							return (
								<div key={index}>
									<div className={classes.TizerIcon}>
										<i className={ `fa ${listIcon[index]}` } aria-hidden="true"/>
									</div>
									<div className={classes.TizerText}>
										{ tizer }
									</div>
								</div>
							)
						})
					}
				</div>
			</div>

			<div className={classes.CardDetailTarifs}>
				<h2>Тарифы</h2>
				<div className={classes.CardDetailTarifsTable}>
					{
						card.tarifs.map((item, index) => {
							return (
								<div key={index} className={classes.CardDetailTarifsItems}>
									<div>{item.name}</div>
									<span/>
									<div>{item.value}</div>
								</div>
							)
						})
					}
				</div>
			</div>

		</div>
	)


};