import React, { Component } from 'react';
import './RadioButtons.css';

class RadioButtons extends Component {
    render(){
        return (
            <>
                <input type="radio" name="type" value={1} />
                <input type="radio" name="type" value={2} />
                <input type="radio" name="type" value={3} />
                <input type="radio" name="type" value={4} />
                <input type="radio" name="type" value={5} />
            </>
        )
    }
}

export default RadioButtons;