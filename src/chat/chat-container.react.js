import React from 'react';

export default React.createClass({

	/*
	 [x] 1. Style component by requiring chat.scss.

	 [x] 2. Add placeholder "Type here" to input text.

	 [x] 3. This component will render a list of messages, initially the list will be empty.
	 When the list is empty, render 'No messages' inside of div with className "messages".

	 [x] 4. Hard-code two initial messages inside of a div with className "messages".
	 (Hint: Array.map, key prop)

	 [x] 5. This component will also render the new message the user is entering in the text input.
	 The new message should be initially empty.
	 (Hint: The text input should be a controlled component)

	 [x] 6. If the new message is not empty, when the user clicks the submit button,
	 add the new message to the message list.

	 [x] 7. After adding the new message to the list, reset the new message

	 [x] 8. If the new message is not empty, when the user hits the Enter key,
	 add the new message to the message list.

	 [x] 9. When the component loads, the new message input should have focus
	 (Hint: refs and react component lifecycle)

	 [x] 10. The user should always be able to see the last message. After a message is added
	 to the list, the messages div should scroll to the bottom.
	 (Hint: domElement.scrollTop = domElement.scrollHeight)

	 [x] 11. Show the message count inside the "count" div.
	 */

	getInitialState() {
		return {
			messageList: [
				{
					id: 1,
					content: 'first message'
				},
				{
					id: 2,
					content: 'second message'
				}
			],
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
