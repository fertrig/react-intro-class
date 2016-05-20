import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import ChatController from './chat/chat-controller.react';
import TrendingController from './chat/trending-controller.react';
import { Router, Route, browserHistory } from 'react-router';
import actionCreators from './chat/chat-actions-creators';
import MainContainer from './chat/main-container.react';
import giphyApi from './chat/giphy-api';

let clearGiphys = function(routerState) {
	actionCreators.clearGiphys();
	giphyApi.trending(routerState.params.count);
};

let routes = (
	<Router history={browserHistory}>
		<Route path="/" component={MainContainer}>
			<Route path="chat" component={ChatController} />
			<Route path="trending/:count" component={TrendingController} onEnter={clearGiphys}/>
			<Route path="*" component={ChatController} />
		</Route>
	</Router>
);

ReactDOM.render(
    routes,
    document.getElementById('my-react-container')
);