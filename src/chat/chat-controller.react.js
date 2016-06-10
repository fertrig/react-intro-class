import React from 'react';
import chatStore from './chat-store';
import ChatContainer from './chat-container.react'
import ChatMetrics from './chat-metrics.react';

export default React.createClass({
	getInitialState() {
		return this._getState();
	},

	_getState() {
		return {
			messageList: chatStore.messageList,
			newMessage: chatStore.newMessage
		}
	},

	render() {
		return (
			<div className="chat-controller">
				<ChatContainer
					messageList={this.state.messageList}
					newMessage={this.state.newMessage} />
				<ChatMetrics {...this.state} />
			</div>
		);
	},

	// render() {
	// 	return (
	// 		<ChatContainer {...this.state} />
	// 	);
	// }
	
	componentDidMount() {
		chatStore.addEventListener(this._handleChange);
	},
	
	componentWillUnmount() {
		chatStore.removeEventListener(this._handleChange);
	},

	_handleChange() {
		this.setState(this._getState());
	}
});
