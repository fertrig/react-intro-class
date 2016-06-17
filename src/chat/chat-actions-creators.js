import dispatcher from './chat-dispatcher';

let chatActionsCreators = {

	changeNewMessage(newMessage) {

		let action = {
			type: 'change-new-message',
			payload: {
				content: newMessage
			}
		};

		dispatcher.dispatch(action);
	},

	submitMessage() {
		let action = {
			type: 'submit-message'
		};

		dispatcher.dispatch(action);
	},

	incomingMessage(msg) {

		let action = {
			type: 'incoming-new-message',
			payload: {
				content: msg
			}
		};

		dispatcher.dispatch(action);
	}
};

export default chatActionsCreators;