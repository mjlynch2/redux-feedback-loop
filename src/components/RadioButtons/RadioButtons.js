import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI component that handles the display of radio buttons for the feeling, understanding, and support views
const styles = {
    root: {
        display: 'inline'
    },
    radio: {
        margin: 10
    }
};

class RadioButtons extends Component {
    render(){
        const { classes } = this.props;
        return (
            <RadioGroup name="type" row className={classes.root} onChange={(event) => { this.props.handleChange(event) }}>
                <Radio className={classes.radio} value={1} checked={this.props.value === '1'}/>
                <Radio className={classes.radio} value={2} checked={this.props.value === '2'}/>
                <Radio className={classes.radio} value={3} checked={this.props.value === '3'}/>
                <Radio className={classes.radio} value={4} checked={this.props.value === '4'}/>
                <Radio className={classes.radio} value={5} checked={this.props.value === '5'}/>
            </RadioGroup>
        )
    }
}

RadioButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);