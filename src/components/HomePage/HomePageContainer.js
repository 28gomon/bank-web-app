import { connect } from "react-redux";
import { HomePage } from "./HomePage";
import { getCardInformationThunkCreator } from "../../redux/reducer-slider";

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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);