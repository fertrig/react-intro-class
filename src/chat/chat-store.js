// event emitter is a node package that lets you emit events and listen for events
import {EventEmitter} from 'events';
import dispatcher from './chat-dispatcher';

class ChatStore extends EventEmitter {

	constructor() {
		super();
		this._messages = [];
		this._newMessage = '';
		dispatcher.register(this.handleAction.bind(this));
	}

	get messages() {
		return this._messages;
	}

	get newMessage() {
		return this._newMessage;
	}

	handleAction(action) {

		global.setTimeout(() => {
			console.log(action.type);
		},0);

		switch(action.type) {
			case 'change-new-message':
				this._newMessage = action.payload.newValue;
				this.emitChange();
				break;

			default:
				break;
		}
	}

	emitChange() {
		this.emit('chat-store-change');
	}

	addChangeListener(callback) {
		this.on('chat-store-change', callback);
	}

	removeChangeListener(callback) {
		this.removeListener('chat-store-change', callback);
	}
}

let store = new ChatStore();

export default store;