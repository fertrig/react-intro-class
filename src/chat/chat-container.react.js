import React from 'react';
import update from 'react-addons-update';

export default React.createClass({

	/*
	 - require scss
	 - add placeholder to input text "Enter message here"
	 - hard-code some messages and render them
	 - the initial newMessage should be empty string
	 - when messages list is empty, render "No messages"
	 - on button click push message
	 - on enter push message
	 - after pushing new message to the message list, reset it
	 - only push new message if not empty
	 - on did update, scroll to bottom: show refs and lifecycle
	 - show message count
	 */

    getInitialState() {
        return {
            messages: [{ id: 1, content: 'a'}, { id: 2, content: 'b'}],
			lastId: 2,
			newMessage: ''
        };
    },

    render() {

		require('./chat.scss');

        return (
            <div className="chat-container">
                <div className="messages">{this.renderMessages()}</div>
                <div className="message-input">
					<input
						type="text"
						placeholder="Enter message here"
						value={this.state.newMessage}
						onChange={this.onNewMessageChange}
						onKeyPress={this.onNewMessageKeyPress}/>
				</div>
                <div className="count"><span>{this.state.messages.length} messages</span></div>
            </div>
        );
    },

    renderMessages() {
        return this.state.messages.map(m => {
			return <div className="message" key={m.id}>{m.content}</div>
		});
    },

	onNewMessageChange(event) {
		this.setState({
			newMessage: event.target.value
		});
	},

	onNewMessageKeyPress(event) {
		if (event.key === 'Enter' && this.state.newMessage.trim().length > 0) {

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
	}
});
