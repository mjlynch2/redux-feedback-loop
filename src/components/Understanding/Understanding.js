import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';

// This is the Understanding view of the feedback form. Users can select a value from 1-5 based on how well they are understanding the content. A value must be selected in order to continue with the form.
class Understanding extends Component {

    state = {
        understanding: '',
        isValid: false
    }

    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state.feeling, keyName: 'understanding' })
        this.props.history.push('/support');
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
            isValid: true
        });
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <span onChange={(event) => this.handleChange(event)}>
                    I'm totally lost.
                    <RadioButtons />
                    I've got this!
                </span>
                <br />
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>        
        )
    }
}

export default connect()(Understanding);