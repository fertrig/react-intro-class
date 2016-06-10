import React from 'react';

export default React.createClass({

	getInitialState() {
		return {
			messageList: [],
			newMessage: ''
		};
	},

	render() {

		require('./chat.scss');

		return (
			<div className="chat-container">
				<div className="messages" ref="messagesDiv">
					{this._renderMessages()}
				</div>
				<div className="message-input">
					<input
						type="text"
						placeholder="Type here"
						value={this.state.newMessage}
						onChange={this._handleChange}
						onKeyPress={this._checkKeyPress}
						ref={this._focus}/>
				</div>
				<div className="message-button">
					<button onClick={this._submitMessage}>Submit</button>
				</div>
				<div className="count">
					{this._renderMessageCount()}
				</div>
			</div>
		);
	},

	_renderMessages() {
		if (this.state.messageList.length === 0) {
			return <span>No messages</span>;
		}
		else {
			return this.state.messageList.map(message => {
				return <div className="message" key={message.id}>{message.content}</div>
			});
		}
	},

	_handleChange(event) {
		this.setState({
			newMessage: event.target.value
		});
	},

	_submitMessage() {
		if (this.state.newMessage.trim().length > 0) {
			let message = {
				id: Date.now(),
				content: this.state.newMessage
			};

			this.state.messageList.push(message);

			this.setState({
				messageList: this.state.messageList,
				newMessage: ''
			});
		}
	},

	_checkKeyPress(event) {
		if (event.key === 'Enter') {
			this._submitMessage();
		}
	},

	_focus(inputDomElement) {
		inputDomElement.focus();
	},

	componentDidUpdate() {
		this.refs.messagesDiv.scrollTop = this.refs.messagesDiv.scrollHeight;
	},

	_renderMessageCount() {
		return <span>Message count: {this.state.messageList.length}</span>
	}
});
