import React from 'react';
import update from 'react-addons-update';

export default React.createClass({

	/*
	 - require scss
	 - add placeholder to input text "Enter message here"
	 - hard-code some messages and render them (map and react key)
	 - the initial newMessage should be empty string
	 - when messages list is empty, render "No messages"
	 - on button click push message, only push new message if not empty (immutability helper)
	 - on enter push message
	 - after pushing newMessage to the message list, reset newMessage
	 - on load, the new message input should have focus (refs and lifecycle)
	 - on did update, scroll to bottom (refs and lifecycle) hint: code to scroll
	 - show message count
	 */

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
                <div className="messages" ref="messages">{this.renderMessages()}</div>
                <div className="message-input">
					<input
						type="text"
						placeholder="Enter message here"
						ref="messageInput"
						value={this.state.newMessage}
						onChange={this.onNewMessageChange}
						onKeyPress={this.onNewMessageKeyPress}/>
				</div>
				<div className="message-button">
					<button onClick={this.onSubmitClick}>Submit</button>
				</div>
                <div className="count"><span>{this.state.messages.length} messages</span></div>
            </div>
        );
    },

    renderMessages() {
		if (this.state.messages.length > 0) {
			return this.state.messages.map(m => {
				return <div className="message" key={m.id}>{m.content}</div>
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

	componentDidMount() {
		this.refs.messageInput.focus();
	},

	componentDidUpdate() {
		this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
	}
});
