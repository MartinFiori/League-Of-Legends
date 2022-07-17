// React
import React, { Component } from "react";
// React Redux (para la store)
import { Provider } from "react-redux";
// React-router-dom (Para las rutas)
import { BrowserRouter, Routes, Route } from "react-router-dom";
// La store para acceder a al data
import store from "../../Redux/store";
// Components
import ChampBrowser from "../ChampBrowser/ChampBrowser.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import FavoritesChamps from "../FavoritesChamps/FavoritesChamps.jsx";
import ChampDetailContainer from "../ChampDetailContainer/ChampDetailContainer.jsx";

class AppRouter extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/details/:id" element={<ChampDetailContainer />} />
						<Route path="/favorites" element={<FavoritesChamps />} />
						<Route path="/" element={<ChampBrowser />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default AppRouter;
