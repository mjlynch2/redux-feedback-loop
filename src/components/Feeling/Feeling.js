import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    handleClick = () => {
        this.props.history.push('/understanding');
    }

    render(){
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Feeling);