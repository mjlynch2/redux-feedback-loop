import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    handleClick = () => {
        this.props.history.push('/comment');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <button id="nextButton" onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);