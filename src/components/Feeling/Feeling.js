import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';
import NextButton from '../NextButton/NextButton';

// DESCRIPTIVE COMMENT
class Feeling extends Component {

    state = {
        feeling: this.props.reduxState.feedbackReducer.feeling,
    }

    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state.feeling, keyName: 'feeling' })
        this.props.history.push('/understanding');
    }

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
                    I'm feeling great!
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
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feeling);