import React from 'react';
import {Link} from 'react-router';

export default React.createClass({

	render() {

		require('./chat.scss');

		return(
			<div className="main-container">
				<h1>Giphy Chat</h1>
				<ul>
					<li><Link to="/chat">Chat</Link></li>
					<li><Link to="/trending/1">Trending Giphys (1)</Link></li>
					<li><Link to="/trending/3">Trending Giphys (3)</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});