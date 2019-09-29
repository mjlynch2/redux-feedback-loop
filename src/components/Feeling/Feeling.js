import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';
import NextButton from '../NextButton/NextButton';

// This is the Feeling view of the feedback form. Users can select a value from 1-5 based on how they are feeling about the content and just in general. A value must be selected in order to continue with the form.
class Feeling extends Component {
    state = {
        feeling: this.props.reduxState.feedbackReducer.feeling,
    }

    // On change, set the value of support to the radio selection
    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state.feeling, keyName: 'feeling' })
        this.props.history.push('/understanding');
    }

    // Dispatch to the redux store and navigate to the next view
    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
        });
    }

    render(){
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <span onChange={(event) => this.handleChange(event)}> 
                    I'm very stressed.
                    <RadioButtons value={this.state.feeling} handleChange={this.handleChange} />
                    I feeling great!
                    <br />
                    <NextButton 
                        isValid={this.state.feeling === '' ? false : true} 
                        handleClick={this.handleClick} 
                    />
                </span>
            </div>
        )
    }
}

// This is used to preserve the value of the radio selection if a user navigates away from the view and then returns. 
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feeling);