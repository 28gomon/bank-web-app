import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CardDetail } from "./CardDetail";
import { withRouter } from "react-router-dom";
import { getCardDetailThunkCreator } from "../../redux/reducer-card-detail";
import { Loader } from "../UI/Loader/Loader";

const CardDetailContainer = (props) => {

	useEffect(() => {
		props.getCardDetail(props.match.params.id);
		// eslint-disable-next-line
	}, [props.match.params.id]);

	const [card, setCard] = useState({});
	useEffect(() => {
		setCard(props.card);
	}, [props.card]);

	if ( Object.keys(card).length === 0 && card.constructor === Object ) {
		return <Loader/>
	}

	return (
		<CardDetail card={card} />
	)
};

const mapStateToProps = state => {
	return {
		card: state.reducerCardDetail.card,
		loaded: state.reducerCardDetail.loaded
	}
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		getCardDetail: ( id ) => dispatch(getCardDetailThunkCreator(id))
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardDetailContainer));