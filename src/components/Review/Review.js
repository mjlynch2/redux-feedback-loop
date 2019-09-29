import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import BackButton from '../BackButton/BackButton';
import SubmitButton from '../SubmitButton/SubmitButton';

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
        const { feeling, understanding, support, comments } = this.props.reduxState.feedbackReducer;
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feeling: {feeling}</p>
                <p>Understanding: {understanding}</p>
                <p>Support: {support}</p>
                <p>Comments: {comments}</p>
                <BackButton back='/comments'/>
                <SubmitButton handleClick={this.handleClick} textToDisplay="Submit"/>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);