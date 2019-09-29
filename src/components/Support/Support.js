import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';
import NextButton from '../NextButton/NextButton';
import BackButton from '../BackButton/BackButton';


class Support extends Component {

    state = { 
        support: this.props.reduxState.feedbackReducer.support,
    }
    handleClick = () => {
        this.props.dispatch({ type: 'SET_FEEDBACK', payload: this.state.support, keyName: 'support' })
        this.props.history.push('/comments');
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <span onChange={(event) => this.handleChange(event)}>
                    I'm feel abandoned.
                    <RadioButtons value={this.state.support} handleChange={this.handleChange} />
                    I feel supported!
                    <BackButton back='/understanding' />
                    <NextButton 
                        isValid={this.state.support === '' ? false : true}
                        handleClick={this.handleClick} 
                    />
                </span>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Support);