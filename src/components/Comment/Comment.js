import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {

    handleClick = () => {
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Comment);