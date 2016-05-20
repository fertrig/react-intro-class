import React from 'react';
import store from './chat-store';
import ChatGiphys from './chat-giphys.react';
import RequestStatus from './request-status.react.js';
import giphyApi from './giphy-api';

export default React.createClass({

	getInitialState() {
		return this._getState();
	},

	_getState() {
		return {
			giphys: store.giphys,
			giphyRequestStatus: store.giphyRequestStatus
		};
	},

	componentDidMount() {
		store.addChangeListener(this.handleChange);
	},

	handleChange() {
		this.setState(this._getState());
	},

	render() {
		return (
			<div>
				<RequestStatus requestStatus={this.state.giphyRequestStatus} />
				<ChatGiphys giphys={this.state.giphys} />
			</div>
		);
	},

	componentWillUnmount() {
		store.removeChangeListener(this.handleChange);
	}
});