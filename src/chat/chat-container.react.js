import React from 'react';

export default React.createClass({

    getInitialState() {
        return {
            messages: []
        };
    },

    render() {
        return (
            <div className="chat-container">
                <div>{this.renderMessages()}</div>
                <input type="text" placeholder="Enter message here" value=""/>
                <div><span>{this.state.messages.length} messages</span></div>
            </div>
        );
    },

    renderMessages() {
        return null;
    }
});
