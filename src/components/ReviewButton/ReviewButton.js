import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FlagIcon from '@material-ui/icons/Flag';

class ReviewButton extends Component {
    render() {
        return (
            <Button variant="text" color="default" onClick={this.props.handleReview}>
                <FlagIcon />
            </Button>
        )
    }
}

export default ReviewButton;
