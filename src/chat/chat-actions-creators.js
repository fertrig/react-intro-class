import dispatcher from './chat-dispatcher';

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
	}
};

export default actionCreators;