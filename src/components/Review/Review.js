import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    handleClick = () => {
        this.props.history.push('/thanks');
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <button id="nextButton" onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);