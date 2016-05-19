import React from 'react';

export default React.createClass({

	render() {

		let message = '';

		return (
			<div className="request-status">
				<span>{message}</span>
			</div>
		);
	}
})