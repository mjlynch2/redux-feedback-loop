import React, { Component } from 'react';
import { connect } from 'react-redux';

// DESCRIPTIVE COMMENT
class Feeling extends Component {

    state = {
        isValid: false
    }

    handleClick = () => {
        this.props.history.push('/understanding');
    }

    handleChange = (event) => {
        this.setState({isValid: true});
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: event.target.value, keyName: 'feeling' })
    }

    render(){
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <span> 
                    I'm very stressed.
                    <input type="radio" name="type" value="1" onChange={(event) => this.handleChange(event)} />
                    <input type="radio" name="type" value="2" onChange={(event) => this.handleChange(event)} />
                    <input type="radio" name="type" value="3" onChange={(event) => this.handleChange(event)} />
                    <input type="radio" name="type" value="4" onChange={(event) => this.handleChange(event)} />
                    <input type="radio" name="type" value="5" onChange={(event) => this.handleChange(event)} />
                    I'm feeling great!
                </span>
                <br/>
                <button id="nextButton" disabled={!this.state.isValid} onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Feeling);