import React, { Component } from 'react';
import axios from 'axios';
import AdminFeedbackTable from '../AdminFeedbackTable/AdminFeedbackTable';

// Admin component allows an admin to view all feedbacks stored in the database, as well as flag an individual feedback for review and/or delete a feedback. The feedback display table is in its own component, AdminFeedbackTable
class Admin extends Component {

    state = {
        feedbackResults: []
    }

    // On pageload, get all the feedback from the DB
    componentDidMount = () => {
        this.getAllFeedback();
    }

    // Axios GET: ask the server for all the feedback in the db, then set it to feedbackResults
    getAllFeedback = () => {
        axios.get('/feedback')
            .then((response) => {
                this.setState({ feedbackResults: response.data })
            }).catch((error) => {
                console.log('Error in GET:', error)
            })
    }

    // Axios DELETE: ask the server to delete the feedback matching the given id, then call the get request to redisplay the feedbacks
    handleDelete = (id) => {
        axios.delete(`/feedback/${id}`)
            .then(() => {
                this.getAllFeedback();
            }).catch((error) => {
                console.log('Error in DELETE:', error)
            })
    }

    // Axios PUT: ask the server to change the value of flagged to true matching the given id, then call the get request to redisplay the feedbacks
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
                <AdminFeedbackTable 
                    feedbackResults={this.state.feedbackResults} 
                    handleReview={this.handleReview}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default Admin;