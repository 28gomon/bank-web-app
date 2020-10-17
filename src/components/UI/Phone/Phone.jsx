import React from 'react';

export const Phone = (props) => {
	return (
		<div className={props.stylePhone}>
			<a href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a>
		</div>
	)
};