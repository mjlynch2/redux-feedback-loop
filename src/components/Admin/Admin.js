import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DeleteButton from '../DeleteButton/DeleteButton';
import ReviewButton from '../ReviewButton/ReviewButton';
import './Admin.css'

class Admin extends Component {

    state = {
        feedbackResults: []
    }

    handleDelete = () => {
        console.log('Clicked!');
    }

    handleReview = () => {
        console.log(this.state.feedbackResults.flagged, 'clicked the flag')
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
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flag for Review?</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackResults.map((item) => 
                            <tr key={item.id}>
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <td>{item.flagged ? 'Flagged for review' : <ReviewButton handleReview={this.handleReview} />}</td>
                                <td><DeleteButton handleDelete={this.handleDelete} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect()(Admin);