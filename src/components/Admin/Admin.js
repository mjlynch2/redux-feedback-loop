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

    componentDidMount = () => {
        this.getAllFeedback();
    }

    getAllFeedback = () => {
        axios.get('/feedback')
            .then((response) => {
                this.setState({ feedbackResults: response.data })
            }).catch((error) => {
                console.log('Error in GET:', error)
            })
    }

    handleDelete = (id) => {
        axios.delete(`/feedback/${id}`)
            .then(() => {
                this.getAllFeedback();
            }).catch((error) => {
                console.log('Error in DELETE:', error)
            })
    }

    handleReview = (id) => {
        axios.put(`/feedback/${id}`)
        .then(() => {
            this.getAllFeedback();
        }).catch((error) => {
            console.log('Error in PUT:', error)
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
                                <td>{item.flagged ? 'Flagged for review' : <ReviewButton handleReview={this.handleReview(item.id)} />}</td>
                                <td><DeleteButton handleDelete={this.handleDelete(item.id)} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect()(Admin);