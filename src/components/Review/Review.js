import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import BackButton from '../BackButton/BackButton';
import SubmitButton from '../SubmitButton/SubmitButton';

// This is the Review view of the feedback form. Users can review their feedback given thus far, then submit it if all is good, or go back to make changes.
class Review extends Component {

    // On submit, POST the feedback to the server, then navigate to the next view
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

// Pull down all the feedback values stored in redux to send over to the server
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);