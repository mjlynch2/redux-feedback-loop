import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const styles = {
    button: {
        margin: 10
    },
};

class BackButton extends Component {

    render() {
        const { classes } = this.props;
        return (
            <>
                <br/>
                <Button 
                    variant="contained" 
                    className={classes.button} 
                    color="default" 
                    onClick={() => {this.props.history.push(this.props.back)}}
                >
                    Back
                </Button>
            </>
        )
    }
}

BackButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(BackButton));
