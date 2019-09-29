import React, { Component } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import ReviewButton from '../ReviewButton/ReviewButton';
import './AdminFeedbackTable.css';

// Displays all of the feedbacks in a table. It receives the array of feedback objects as a prop from Admin
class AdminFeedbackTable extends Component {

    render() {
        return (
            <div>
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
                        {this.props.feedbackResults.map((item) =>
                            <tr key={item.id}>
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <td>{item.flagged ? 'Needs review' 
                                    : <ReviewButton handleReview={this.props.handleReview} id={item.id} />}</td>
                                <td><DeleteButton handleDelete={this.props.handleDelete} id={item.id} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminFeedbackTable;