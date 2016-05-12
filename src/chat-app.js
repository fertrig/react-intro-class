import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import ChatController from './chat/chat-controller.react';

ReactDOM.render(
    <ChatController/>,
    document.getElementById('my-react-container')
);