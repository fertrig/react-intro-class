import React from 'react';

export default React.createClass({
    render() {
        return <h1>Hi, my name is {this.props.name}. I like to {this.props.likeTo}.</h1>;
    }
});