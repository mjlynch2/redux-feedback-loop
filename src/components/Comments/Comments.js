import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        comments: ''
    }

    handleChange = (event) => {
        this.setState({comments: event.target.value})
    }

    handleClick = () => {
        this.props.dispatch({type: 'SET_FEEDBACK', payload: this.state.comments, keyName: 'comments'})
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

export default connect()(Comments);