import actionCreators from './chat-actions-creators';
import $ from 'jquery';

let giphyApi = {

	random(seed) {
		let url = `http://api.giphy.com/v1/gifs/translate?s=${seed}&api_key=dc6zaTOxFJmzC&rating=g`;

		$.ajax({
			url,
			method: 'GET',
			success(res) {
				console.log(res);

			},
			error() {
				console.log(...arguments);

			}
		});
	},

	trending() {
		let url = `http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=2&rating=g`;

		$.ajax({
			url,
			method: 'GET',
			success(res) {
				console.log(res);

			},
			error() {
				console.log(...arguments);

			}
		});
	}
};

export default giphyApi;