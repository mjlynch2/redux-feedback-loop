import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';

class Support extends Component {

    state = { 
        support: ''
    }
    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state.support, keyName: 'support' })
        this.props.history.push('/comments');
    }

    handleChange = (event) => {
        this.setState({ support: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <span onChange={(event) => this.handleChange(event)}>
                    I'm feel abandoned.
                    <RadioButtons />
                    I feel supported!
                </span>
                <br />
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);