import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Thanks extends Component {
    state = {
        redirectHome: false
    }

    handleNewFeedback = () => {
        this.setState({redirectHome: true})
    }

    render() {
        if(this.state.redirectHome){
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h2>Thank You!</h2>
                <button id="newFeedback" onClick={this.handleNewFeedback}>Leave New Feedback</button>
            </div>
        )
    }
}

export default connect()(Thanks);