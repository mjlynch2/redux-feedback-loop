import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

    state = {
        feedbackResults: []
    }

    componentDidMount = () => {
        axios.get('/feedback')
        .then((response) => {
            this.setState({feedbackResults: response.data})
        }).catch((error) => {
            console.log('Error in GET:', error)
        })
    }

    render() {
        return (
            <div>
                <h2>Admin</h2>
                <pre>{JSON.stringify(this.state.feedbackResults)}</pre>
            </div>
        )
    }
}

export default connect()(Admin);