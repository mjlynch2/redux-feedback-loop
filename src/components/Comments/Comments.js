import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import CommentsTextArea from '../CommentsTextArea/CommentsTextArea';

class Comments extends Component {
    state = {
        comments: '',
        isValid: false
    }

    handleChange = (event) => {
        if(event.target.value === '') {
            this.setState({isValid: false})
        } else {
            this.setState({ isValid: true })
        }
        this.setState({
            comments: event.target.value
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
                <CommentsTextArea handleChange={this.handleChange} />
                <NextButton isValid={this.state.isValid} handleClick={this.handleClick} />
            </div>
        )
    }
}

export default connect()(Comments);