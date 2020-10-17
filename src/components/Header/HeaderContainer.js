import { connect } from "react-redux";
import { Header } from "./Header";
import { activeMenuThunkCreator } from "../../redux/reducer-menu";

const mapStateToProps = (state) => {
	return {
		activeMenu: state.reducerHeader.active
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		activeMenuAction: (active) => dispatch(activeMenuThunkCreator(active))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);