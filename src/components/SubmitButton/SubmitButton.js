import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        margin: 10
    }
};

class SubmitButton extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Button
                variant="contained"
                className={classes.button}
                color="primary"
                onClick={this.props.handleClick}
            >
                {this.props.textToDisplay}
                </Button>
        )
    }
}


SubmitButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SubmitButton);
