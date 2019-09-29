import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class NextButton extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" disabled={!this.props.isValid} color="primary" onClick={this.props.handleClick}>
                    Next
                </Button>
            </div>
        )
    }
}

export default NextButton;
