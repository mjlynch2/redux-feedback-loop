import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FlagIcon from '@material-ui/icons/Flag';

// Material UI button that's used on the Admin change to flag a feedback for review
class ReviewButton extends Component {
    render() {
        return (
            <Button variant="text" color="default" onClick={() => {this.props.handleReview(this.props.id)}}>
                <FlagIcon />
            </Button>
        )
    }
}

export default ReviewButton;
