import dispatcher from './chat-dispatcher';
import giphyApi from './giphy-api';

// this object will have all the helper functions that will dispatch actions
// the action creators form an interface of what's possible to do with the application
let actionCreators = {

	changeNewMessage(newValue) {

		// this is the action object, it has a type and payload
		// payload will have any data that complements the action
		let action = {
			type: 'change-new-message',
			payload: {
				newValue
			}
		};

		// we use the dispatcher to dispatch the action
		dispatcher.dispatch(action);
	},

	submitNewMessage() {

		let action = {
			type: 'submit-new-message'
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
	},
	
	checkGiphyCommand(newMessage) {
		let giphyCommand = '/giphy';
		if (newMessage.startsWith(giphyCommand)) {
			let seed = newMessage.substring(giphyCommand.length + 1);
			giphyApi.random(seed);
		}	
	},

	updateRequestStatus(actionType) {
		let action = {
			type: actionType
		};

		dispatcher.dispatch(action);
	},

	addNewGiphy(giphyData) {

		let action = {
			type: 'add-new-giphy',
			payload: {
				giphyData
			}
		};

		dispatcher.dispatch(action);
	},

	addNewGiphyList(giphyList) {
		let action = {
			type: 'add-giphy-list',
			payload: {
				giphyList
			}
		};

		dispatcher.dispatch(action);
	}
};

export default actionCreators;