import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import CommentsTextArea from '../CommentsTextArea/CommentsTextArea';
import BackButton from '../BackButton/BackButton';

// This is the Comments view of the feedback form. Users can say what's on their mind. In fact, they must -- an empty value will disable the next button. Comments will be dispatched to the redux store upon clicking next. 
class Comments extends Component {
    state = {
        comments: this.props.reduxState.feedbackReducer.comments,
    }

    // On change, set the value of comments to the text field input
    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    // Dispatch to the redux store and navigate to the next view
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

// This is used to preserve the value of the comment if a user navigates away from the view and then returns. 
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comments);