import React from 'react';
import store from './chat-store';
import ChatContainer from './chat-container.react';

export default React.createClass({
	
	getInitialState() {
		return {
			messages: store.message,
			newMessage: store.newMessage
		};
	},

	componentDidMount() {
		store.addChangeListener(this.handleChange);
	},

	handleChange() {
		this.setState({
			message: store.message,
			newMessage: store.newMessage
		});
	},

	render() {
		return (
			<ChatContainer messages={this.state.messages} newMessage={this.state.newMessage} />
		);
	},

	componentWillUnmount() {
		store.removeChangeListener(this.handleChange);
	}
});