import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SubmitButton from '../SubmitButton/SubmitButton';

class Thanks extends Component {
    state = {
        redirectHome: false
    }

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