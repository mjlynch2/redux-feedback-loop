import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    handleClick = () => {
        this.props.history.push('/support');
    }

    handleChange = (event) => {
        // this.setState({ isValid: true });
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: event.target.value, keyName: 'understanding' })
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <select onChange={this.handleChange}>
                    <option value="1">1 - I'm totally lost</option>
                    <option value="2">2</option>
                    <option value="3">3 - I'm getting there</option>
                    <option value="4">4</option>
                    <option value="5">5 - I've got this!</option>
                </select>
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>        
        )
    }
}

export default connect()(Understanding);