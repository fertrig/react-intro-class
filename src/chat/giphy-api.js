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
				global.setTimeout(() => {
					actionCreators.addNewGiphy(res.data);
				}, 1000);
			},
			error() {
				console.log(...arguments);
			}
		})
	}
};

export default giphyApi;