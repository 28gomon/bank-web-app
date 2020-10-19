import React from "react";
import classes from './OrderCard.module.css';

import {imageArray} from "../HomePage/HomePage";

export const OrderCard = ( { clientInfo, card } ) => {

	return (
		<div className={ classes.OrderCard }>

			{/*<h1>{clientInfo.userInf.personalData.firstName}</h1>*/}

			<div className={classes.OrderCardWrapper}>

				<div className={classes.OrderCardHeader}>
					<div className={classes.OrderCardInfo}>
						<h1>Бронирование карты: {card.title}</h1>
						<p>Краткое описание: <span>{card.description}</span></p>
						<span><b>Доступные типы карты:</b></span>
						<ul>
							{
								card.type.map(t => {
									return (
										<li key={t.id}>{t.name}</li>
									)
								})
							}
						</ul>
					</div>
					<div className={classes.OrderCardImage}>
						<img src={`${imageArray[card.id - 1]}`} alt=""/>
					</div>
				</div>

			</div>
		</div>
	)
};