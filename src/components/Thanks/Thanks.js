import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SubmitButton from '../SubmitButton/SubmitButton';

// This is the final view of the feedback form. It thanks the user for feedback, and offers an option to leave new feedback. That choice will navigate users back to the start of the form and clear all inputs from the redux store
class Thanks extends Component {
    state = {
        redirectHome: false
    }

    // Clear all inputs from the redux store and send the user to the first view
    handleNewFeedback = () => {
        this.props.dispatch({type: 'CLEAR_FEEDBACK'});
        this.setState({redirectHome: true});
    }

    render() {
        if(this.state.redirectHome){
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h2>Thank You!</h2>
                <SubmitButton handleClick={this.handleNewFeedback} textToDisplay="Leave New Feedback" />
            </div>
        )
    }
}

export default connect()(Thanks);