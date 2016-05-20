import actionCreators from './chat-actions-creators';

var pubnub = PUBNUB({
	subscribe_key: 'sub-c-216ecbd4-18a2-11e6-b700-0619f8945a4f', // always required
	publish_key: 'pub-c-e2041d10-85af-47d9-a31f-1cc8d2ae3885' // only required if publishing
});

pubnub.subscribe({
	channel: 'react-class',
	callback: function(m) {
		actionCreators.incomingMessage(m);
	},
	error: function(err) {
		console.log(err);
	}
});

let messageApi = {

	publish(message) {
		pubnub.publish({
			channel: 'react-class',
			message,
			callback: function(m){
				//console.log(m);
			}
		});
	}
};

export default messageApi;
