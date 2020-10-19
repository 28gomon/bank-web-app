import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { OrderCard } from "./OrderCard";
import { withRouter } from "react-router-dom";
import AuthUserContainer from "../AuthUser/AuthUserContainer";
import { Loader } from "../UI/Loader/Loader";
import { GetCardIdThunkCreator } from "../../redux/reducer-auth-user";
import { getCardDetailThunkCreator } from "../../redux/reducer-card-detail";

const OrderCardContainer = ( { card, client, isFetch, loaded, ...props }) => {

	const [clientInfo, setClientInfo] = useState({});
	useEffect(() => {
		setClientInfo(client);
		props.getCardId(props.match.params.id);
		// eslint-disable-next-line
	}, [client]);

	useEffect(() => {
		props.getCardDetail(props.cardId);
		// eslint-disable-next-line
	}, [props.cardId]);

	if (loaded) {
		return <Loader/>
	}

	if (Object.keys(clientInfo).length === 0 && clientInfo.constructor === Object) {
		return <AuthUserContainer />
	}

	if (Object.keys(card).length === 0 && card.constructor === Object) {
		return <Loader />
	}

	return (
		<OrderCard
			clientInfo={clientInfo}
			card={card}
		/>
	)
};

const mapStateToProps = (state) => {
	return {
		client: state.reducerAuthUser.client,
		isFetch: state.reducerAuthUser.isFetch,
		loaded: state.reducerAuthUser.loaded,
		cardId: state.reducerAuthUser.cardId,
		card: state.reducerCardDetail.card,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCardId: (cardId) => dispatch(GetCardIdThunkCreator(cardId)),
		getCardDetail: ( id ) => dispatch(getCardDetailThunkCreator(id)),
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderCardContainer));