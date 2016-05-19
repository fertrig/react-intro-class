import React from 'react';

export default React.createClass({

	render() {
		return (
			<div className="giphys">
				{this._renderGiphys()}
			</div>
		);
	},

	_renderGiphys() {
		return this.props.giphys.map(giphy => {
			return (
				<img key={giphy.id} src={giphy.url} />
			);
		});
	}

});