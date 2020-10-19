import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { HomePage } from "./HomePage";
import { getCardInformationThunkCreator } from "../../redux/reducer-slider";
import { Loader } from "../UI/Loader/Loader";

const HomePageContainer = (props) => {

	useEffect(() => {
		props.getCardSlider();
		// eslint-disable-next-line
	}, []);

	const [ cardInfo, setCardInfo ] = useState([]);
	useEffect(() => {
		setCardInfo(props.cards);
		// eslint-disable-next-line
	}, [ props.cards ]);

	if ( props.loaded ) return <Loader/>

	return (
		<HomePage
			{...props}
			cardInfo={cardInfo}
		/>
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
		getCardSlider: () => dispatch(getCardInformationThunkCreator())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);