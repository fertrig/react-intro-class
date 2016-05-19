import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import ChatController from './chat/chat-controller.react';
import giphyApi from './chat/giphy-api';


ReactDOM.render(
    <ChatController/>,
    document.getElementById('my-react-container'),
	giphyApi.trending
);