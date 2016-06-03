import React from 'react';
import update from 'react-addons-update';

function Message(props) {
	return <div className="message">{props.message.content}</div>
}

function MessageCount(props) {
	return <div className="count"><span>{props.messages.length} messages</span></div>
}

export default React.createClass({

	getInitialState() {
		return {
			messages: [],
			lastId: 0,
			newMessage: ''
		};
	},

	render() {

		require('./chat.scss');

		return (
			<div className="chat-container">
				<div className="messages-container" ref="messagesContainer">
					{this._renderMessages()}
				</div>
				<div className="message-input">
					<input
						type="text"
						placeholder="Enter message here"
						ref={this._focusInput}
						value={this.state.newMessage}
						onChange={this.onNewMessageChange}
						onKeyPress={this.onNewMessageKeyPress}/>
				</div>
				<div className="message-button">
					<button onClick={this.onSubmitClick}>Submit</button>
				</div>
				<MessageCount messages={this.state.messages} />
			</div>
		);
	},

	_focusInput(domElement) {
		domElement.focus();
	},

	_renderMessages() {
		if (this.state.messages.length > 0) {
			return this.state.messages.map(m => {
				return <Message message={m} key={m.id} />;
			});
		}
		else {
			return <div className="no-messages">No messages</div>;
		}
	},

	onNewMessageChange(event) {
		this.setState({
			newMessage: event.target.value
		});
	},

	onSubmitClick() {
		this.submitNewMessage();
	},

	submitNewMessage() {
		if (this.state.newMessage.trim().length > 0) {

			let message = {
				id: this.state.lastId + 1,
				content: this.state.newMessage
			};

			let newMessageList = update(this.state.messages, {$push: [message]});

			this.setState({
				messages: newMessageList,
				lastId: message.id + 1,
				newMessage: ''
			});
		}
	},

	onNewMessageKeyPress(event) {
		if (event.key === 'Enter') {
			this.submitNewMessage();
		}
	},

	componentDidUpdate() {
		this.refs.messagesContainer.scrollTop = this.refs.messagesContainer.scrollHeight;
	}
});
