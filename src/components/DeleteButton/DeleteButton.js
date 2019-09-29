import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// Material UI component for deleting a feedback from the admin page
class DeleteButton extends Component {
    render() {
        return (
            <Button variant="text" color="default" onClick={() => {this.props.handleDelete(this.props.id)}}>
                <DeleteForeverIcon />
            </Button>
        )
    }
}

export default DeleteButton;
