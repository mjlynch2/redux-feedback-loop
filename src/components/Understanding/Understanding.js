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
                <span>
                    I'm totally lost.
                    <input type="radio" name="type" value={1} onChange={(event) => this.handleChange(event)} />
                    <input type="radio" name="type" value={2} onChange={(event) => this.handleChange(event)} />
                    <input type="radio" name="type" value={3} onChange={(event) => this.handleChange(event)} />
                    <input type="radio" name="type" value={4} onChange={(event) => this.handleChange(event)} />
                    <input type="radio" name="type" value={5} onChange={(event) => this.handleChange(event)} />
                    I've got this!
                </span>
                <br />
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>        
        )
    }
}

export default connect()(Understanding);