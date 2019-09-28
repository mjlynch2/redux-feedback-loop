import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    handleClick = () => {
        this.props.history.push('/comments');
    }

    handleChange = (event) => {
        // this.setState({ isValid: true });
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: event.target.value, keyName: 'support' })
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <select onChange={this.handleChange}>
                    <option value="1">1 - I feel abandoned</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 - I feel supported!</option>
                </select>
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);