import React from 'react';
import store from './chat-store';
import ChatContainer from './chat-container.react';
import ChatMetrics from './chat-metrics.react';

export default React.createClass({
	
	getInitialState() {
		return {
			messages: store.messages,
			newMessage: store.newMessage
		};
	},

	componentDidMount() {
		store.addChangeListener(this.handleChange);
	},

	handleChange() {
		this.setState({
			messages: store.messages,
			newMessage: store.newMessage
		});
	},

	render() {
		return (
			<div className="chat-controller">
				<ChatContainer messages={this.state.messages} newMessage={this.state.newMessage} />
				<ChatMetrics messages={this.state.messages} newMessage={this.state.newMessage} />
			</div>
		);
	},

	componentWillUnmount() {
		store.removeChangeListener(this.handleChange);
	}
});