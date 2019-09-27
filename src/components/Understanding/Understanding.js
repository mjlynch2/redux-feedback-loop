import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    handleClick = () => {
        this.props.history.push('/support');
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>        
        )
    }
}

export default connect()(Understanding);