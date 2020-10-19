import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import { reducerSlider } from "./reducer-slider";
import { reducerMenu } from "./reducer-menu";
import { reducerHeader } from "./reducer-header";
import { reducerCardDetail } from "./reducer-card-detail";
import { reducerOrderCard } from "./reducer-order-card";
import { reducerAuthUser } from "./reducer-auth-user";

const reducers = combineReducers({
	reducerSlider,
	reducerMenu,
	reducerHeader,
	reducerCardDetail,
	reducerOrderCard,
	reducerAuthUser,
});

export const store = createStore(reducers, applyMiddleware(reduxThunk));
window.store = store;