import React, { Component } from 'react';
import axios from 'axios';
import AdminFeedbackTable from '../AdminFeedbackTable/AdminFeedbackTable';

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