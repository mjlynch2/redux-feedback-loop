import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class DeleteButton extends Component {
    render() {
        return (
            <Button variant="text" color="default" onClick={this.props.handleClick}>
                <DeleteForeverIcon />
            </Button>
        )
    }
}

export default DeleteButton;
