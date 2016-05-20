import actionCreators from './chat-actions-creators';
import $ from 'jquery';

let giphyApi = {

	random(seed) {
		let url = `http://api.giphy.com/v1/gifs/translate?s=${seed}&api_key=dc6zaTOxFJmzC&rating=g`;

		actionCreators.updateRequestStatus('giphy-request-fetching');

		$.ajax({
			url,
			method: 'GET',
			success(res) {
				console.log(res);
				actionCreators.updateRequestStatus('giphy-request-success');
				actionCreators.addNewGiphy(res.data);
			},
			error() {
				
				actionCreators.updateRequestStatus('giphy-request-failed');
				
				console.log(...arguments);
			}
		});
	},

	trending(count = 2) {
		let url = `http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=${count}&rating=g`;

		actionCreators.updateRequestStatus('giphy-request-fetching');

		$.ajax({
			url,
			method: 'GET',
			success(res) {
				console.log(res);
				actionCreators.updateRequestStatus('giphy-request-success');
				actionCreators.addNewGiphyList(res.data);
			},
			error() {

				actionCreators.updateRequestStatus('giphy-request-failed');

				console.log(...arguments);
			}
		});
	}
};

export default giphyApi;