import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleClick = () => {
        this.props.dispatch({type: 'SET_FEEDBACK', payload: this.state.comment, keyName: 'comment'})
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <textarea onChange={this.handleChange} />
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Comment);