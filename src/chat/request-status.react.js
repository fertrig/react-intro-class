import React from 'react';

export default React.createClass({

	render() {

		let message = '';

		if (this.props.requestStatus === 'fetching') {
			message = 'Fetching giphy...';
		}
		else if (this.props.requestStatus === 'failed') {
			message = 'Request failed!';
		}
		else if (this.props.requestStatus === 'success') {
			message = 'Success';
		}

		return (
			<div className="request-status">
				<span>{message}</span>
			</div>
		);
	}
})