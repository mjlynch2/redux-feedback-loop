import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleClick = () => {
        axios.post('/feedback', this.props.reduxState.feedbackReducer)
        .then(() => {
            this.props.history.push('/thanks');
        }).catch((error) => {
            console.log('Error in POST:', error);
            alert('Error in POST:', error);
        })
    }

    render() {
        const { feeling, understanding, support, comment } = this.props.reduxState.feedbackReducer;
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feeling: {feeling}</p>
                <p>Understanding: {understanding}</p>
                <p>Support: {support}</p>
                <p>Comment: {comment}</p>
                <button id="nextButton" onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);