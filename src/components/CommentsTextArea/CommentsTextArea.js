import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class CommentsTextArea extends Component {
    render() {
        return (
            <TextField
                placeholder="What's on your mind?"
                value={this.props.value}
                multiline
                fullWidth
                required
                margin="normal"
                onChange={(event) => {this.props.handleChange(event)}}
                variant="outlined"
            />
        )
    }
}

export default CommentsTextArea;
