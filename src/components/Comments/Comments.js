import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import CommentsTextArea from '../CommentsTextArea/CommentsTextArea';
import BackButton from '../BackButton/BackButton';

class Comments extends Component {
    state = {
        comments: this.props.reduxState.feedbackReducer.comments,
    }

    handleChange = (event) => {
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
                <CommentsTextArea handleChange={this.handleChange} value={this.state.comments}/>
                <BackButton back='/support'/>
                <NextButton 
                    isValid={this.state.comments === '' ? false : true}
                    handleClick={this.handleClick} 
                />
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comments);