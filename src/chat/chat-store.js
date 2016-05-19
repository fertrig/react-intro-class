// event emitter is a node package that lets you emit events and listen for events
import {EventEmitter} from 'events';
import dispatcher from './chat-dispatcher';
import messageApi from './message-api';

class ChatStore extends EventEmitter {

	constructor() {
		super();
		this._messages = [];
		this._newMessage = '';
		this._giphys = [];
		this._giphyRequestStatus = '';

		dispatcher.register(this.handleAction.bind(this));
	}

	get messages() {
		return this._messages;
	}

	get newMessage() {
		return this._newMessage;
	}

	get giphys() {
		return this._giphys;
	}

	get giphyRequestStatus() {
		return this._giphyRequestStatus;
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
			
			case 'submit-new-message':
				this._submitNewMessage();
				this.emitChange();
				break;

			case 'incoming-new-message':
				this._incomingNewMessage(action.payload.content);
				this.emitChange();
				break;
			
			case 'add-new-giphy':
				this._addNewGiphy(action.payload.giphyData);
				this.emitChange();
				break;

			case 'add-giphy-list':
				this._addGiphyList(action.payload.giphyList);
				this.emitChange();
				break;

			case 'giphy-request-fetching':
				this._giphyRequestStatus = 'fetching';
				this.emitChange();
				break;

			case 'giphy-request-success':
				this._giphyRequestStatus = 'success';
				this.emitChange();
				break;

			case 'giphy-request-failed':
				this._giphyRequestStatus = 'failure';
				this.emitChange();
				break;

			default:
				break;
		}
	}

	_submitNewMessage() {
		if (this._newMessage.trim().length > 0) {
			messageApi.publish(this._newMessage);
			this._newMessage = '';
		}
	}

	_incomingNewMessage(content) {
		let messageObj = {
			id: Date.now(),
			content
		};

		this._messages.push(messageObj);
	}
	
	_addNewGiphy(giphyData) {
		this._giphys.push({
			id: this._giphys.length,
			url: giphyData.images.fixed_height.url
		});
	}

	_addGiphyList(giphyList) {
		for (let giphyData of giphyList) {
			this._addNewGiphy(giphyData);
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