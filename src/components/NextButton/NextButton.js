import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        margin: 10
    }
};

class NextButton extends Component {
    render() {
        const { classes } = this.props;
        return (
                <Button 
                    variant="contained" 
                    className={classes.button} 
                    disabled={!this.props.isValid} 
                    color="primary" 
                    onClick={this.props.handleClick}
                >
                    Next
                </Button>
        )
    }
}


NextButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NextButton);
