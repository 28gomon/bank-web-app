import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AllCard } from "./AllCard";
import { getCardInformationThunkCreator } from "../../redux/reducer-slider";
import { Loader } from "../UI/Loader/Loader";

const AllCardContainer = ( props) => {

	useEffect(() => {
		props.getCardInformation();
		// eslint-disable-next-line
	}, []);

	const [cards, setCards] = useState([]);
	useEffect(() => {
		setCards(props.cards);
		// eslint-disable-next-line
	}, [props.cards]);

	if (props.loaded) return <Loader/>

	return (
		<AllCard {...props} cards={cards} />
	)
};

const mapStateToProps = (state) => {
	return {
		cards: state.reducerSlider.cards,
		loaded: state.reducerSlider.loaded
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCardInformation: () => dispatch(getCardInformationThunkCreator())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCardContainer);