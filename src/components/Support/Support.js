import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';
import NextButton from '../NextButton/NextButton';
import BackButton from '../BackButton/BackButton';

// This is the Support view of the feedback form. Users can select a value from 1-5 based on how they are feeling supported. A value must be selected in order to continue with the form.
class Support extends Component {
    state = { 
        support: this.props.reduxState.feedbackReducer.support,
    }

    // On change, set the value of support to the radio selection
    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state.support, keyName: 'support' })
        this.props.history.push('/comments');
    }

    // Dispatch to the redux store and navigate to the next view
    handleChange = (event) => {
        this.setState({
            support: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <span onChange={(event) => this.handleChange(event)}>
                    I feel abandoned.
                    <RadioButtons value={this.state.support} handleChange={this.handleChange} />
                    I feel supported!
                    <BackButton back='/understanding' />
                    <NextButton 
                        isValid={this.state.support === '' ? false : true}
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

export default connect(putReduxStateOnProps)(Support);