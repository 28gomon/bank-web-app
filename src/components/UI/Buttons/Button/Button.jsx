import React from "react";

export const Button = (
	{
		styleButton, onClick, disabled,...props
	}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={styleButton}
		>
			{props.children}
		</button>
	)
};