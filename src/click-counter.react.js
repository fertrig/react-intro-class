import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>Click Counter</h1>
                <div>
                    <button onClick={this.increment}>+{this.props.offset}</button>
                    <button onClick={this.decrement}>-{this.props.offset}</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
                <h2>Clicks: {this.state.clickCount}</h2>
            </div>
        );
    },
    getInitialState: function() {
        return {
            clickCount: this.props.initialCount
        };
    },
    increment: function() {
        this.setState({
            clickCount: this.state.clickCount + this.props.offset
        });
    },
    decrement: function() {
        this.setState({
            clickCount: this.state.clickCount - this.props.offset
        });
    },
    reset: function() {
        this.setState({
            clickCount: this.props.initialCount
        });
    }
});