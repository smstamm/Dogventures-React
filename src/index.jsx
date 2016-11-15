import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// COMPONENTS
import App from "./components/app";
import Home from "./components/home";
import About from "./components/about";
import Zip from "./components/zip";
import reducers from "./reducers";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="home" component={Home} />
				<Route path="about" component={About} />
				<Route path="zip" component={Zip} />
			</Route>
		</Router>
	</Provider>, document.querySelector("#dogventures"));
