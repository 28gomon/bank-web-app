import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import { Switch, Route } from "react-router-dom";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import CardDetailContainer from "./components/CardDetail/CardDetailContainer";
import AllCardContainer from "./components/AllCard/AllCardContainer";
import OrderCardContainer from "./components/OrderCard/OrderCardContainer";
import AuthUserContainer from "./components/AuthUser/AuthUserContainer";

function App() {
	return (
		<div className="App">

			<HeaderContainer/>

			<div className={'ContentWrapper'}>
				<Switch>

					<Route path={'/user-auth'} render={() => <AuthUserContainer/> } />
					<Route path={'/order-card/:id'} render={() => <OrderCardContainer/> } />
					<Route path={'/all-cards'} render={() => <AllCardContainer/> } />
					<Route path={'/more/:id'} render={() => <CardDetailContainer/> } />
					<Route path={'/'} render={() => <HomePageContainer/>} />

				</Switch>
			</div>

		</div>
	);
}

export default App;
