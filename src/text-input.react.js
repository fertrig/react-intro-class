import React from 'react';

export default React.createClass({

	getInitialState() {
		return {
			message: ""
		};
	},

	render() {
		return <input placeholder="Text goes here" value={this.state.message} onChange={this.onInputChange}/>
	},

	onInputChange(event) {
		this.setState({
			message: event.target.value
		});
	}
});