import {EventEmitter} from 'events';
import dispatcher from './chat-dispatcher';
import messageApi from './message-api';

const storeChangeEvent = 'chat-store-change';

class ChatStore extends EventEmitter {

	constructor() {
		super();
		this._state = {
			messageList: [],
			newMessage: ''
		};

		dispatcher.register(this.handleAction.bind(this));
	}

	get messageList() {
		return this._state.messageList;
	}

	get newMessage() {
		return this._state.newMessage;
	}

	handleAction(action) {

		console.log(action.type);

		switch(action.type) {
			case 'change-new-message':
				this._state.newMessage = action.payload.content;
				this.emitChange();
				break;

			case 'submit-message':
				this._submitMessage();
				this.emitChange();
				break;

			case 'incoming-new-message':
				this._incomingNewMessage(action.payload.content);
				this.emitChange();
				break;

			default:
				break;
		}
	}

	_submitMessage() {
		if (this._state.newMessage.trim().length > 0) {
			messageApi.publish(this._state.newMessage);
			this._state.newMessage = '';
		}
	}

	_incomingNewMessage(content) {
		let messageObj = {
			id: Date.now(),
			content
		};

		this._state.messageList.push(messageObj);
	}

	emitChange() {
		this.emit(storeChangeEvent);
	}

	addEventListener(callback) {
		this.on(storeChangeEvent, callback);
	}

	removeEventListener(callback) {
		this.removeListener(storeChangeEvent, callback);
	}
}

let chatStore = new ChatStore();

export default chatStore;