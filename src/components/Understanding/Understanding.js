import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';
import NextButton from '../NextButton/NextButton';
import BackButton from '../BackButton/BackButton';

// This is the Understanding view of the feedback form. Users can select a value from 1-5 based on how well they are understanding the content. A value must be selected in order to continue with the form.
class Understanding extends Component {
    state = {
        understanding: this.props.reduxState.feedbackReducer.understanding,
    }

    // On change, set the value of understanding to the radio selection
    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state.understanding, keyName: 'understanding' })
        this.props.history.push('/support');
    }

    // Dispatch to the redux store and navigate to the next view
    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
            isValid: true
        });
        return event.target.value;
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <span onChange={(event) => this.handleChange(event)}>
                    I'm totally lost.
                    <RadioButtons value={this.state.understanding} handleChange={this.handleChange}/>
                    I've got this!
                    <BackButton back='/'/>
                    <NextButton
                        isValid={this.state.understanding === '' ? false : true}
                        handleClick={this.handleClick}
                    />
                </span>
            </div>        
        )
    }
}

// This is used to preserve the value of the selection if a user navigates away from the view and then returns. 
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Understanding);