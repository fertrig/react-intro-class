import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import ChatContainer from './chat/chat-container.react';

ReactDOM.render(
    <ChatContainer/>,
    document.getElementById('my-react-container')
);