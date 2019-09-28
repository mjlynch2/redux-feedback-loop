import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton';

class Comments extends Component {
    state = {
        comments: '',
        isValid: false
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
            isValid: true
        });
    }

    handleClick = () => {
        this.props.dispatch({type: 'SET_FEEDBACK', payload: this.state.comments, keyName: 'comments'})
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <textarea onChange={this.handleChange} />
                <NextButton isValid={this.state.isValid} handleClick={this.handleClick} />
            </div>
        )
    }
}

export default connect()(Comments);