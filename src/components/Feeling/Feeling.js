import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';

// DESCRIPTIVE COMMENT
class Feeling extends Component {

    state = {
        feeling: '',
        isValid: false
    }

    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state.feeling, keyName: 'feeling' })
        this.props.history.push('/understanding');
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
            isValid: true
        });
        
    }

    render(){
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <span onChange={(event) => this.handleChange(event)}> 
                    I'm very stressed.
                    <RadioButtons />
                    I'm feeling great!
                </span>
                <br/>
                <button id="nextButton" disabled={!this.state.isValid} onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Feeling);