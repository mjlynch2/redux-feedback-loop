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
                {/* <pre>{JSON.stringify(this.state.feedbackResults)}</pre> */}
                <table>
                    <thead>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flag for Review?</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.feedbackResults.map((item) => 
                            <tr key={item.id}>
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <td>{item.flagged}</td>
                                <td>delete button placeholder</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect()(Admin);