import React from 'react';
import actionCreators from './chat-actions-creators';

export default React.createClass({

	render() {

		require('./chat.scss');

		return (
			<div className="chat-container">
				<div className="messages" ref="messages">{this.renderMessages()}</div>
				<div className="message-input">
					<input
						type="text"
						placeholder="Enter message here"
						ref="messageInput"
						value={this.props.newMessage}
						onChange={this.onNewMessageChange}
						onKeyPress={this.onNewMessageKeyPress}/>
				</div>
				<div className="message-button">
					<button onClick={this.onSubmitClick}>Submit</button>
				</div>
			</div>
		);
	},

	renderMessages() {
		if (this.props.messages.length > 0) {
			return this.props.messages.map(m => {
				return <div className="message" key={m.id}>{m.content}</div>
			});
		}
		else {
			return <div className="no-messages">No messages</div>;
		}
	},

	onNewMessageChange(event) {
		actionCreators.changeNewMessage(event.target.value);
	},

	onSubmitClick() {
		this.submitNewMessage();
	},

	submitNewMessage() {
		actionCreators.submitNewMessage();
	},

	onNewMessageKeyPress(event) {
		if (event.key === 'Enter') {
			this.submitNewMessage();
		}
	},

	componentDidMount() {
		this.refs.messageInput.focus();
	},

	componentDidUpdate() {
		this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
	}
});
