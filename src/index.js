import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

// declare a feedback variable; an object with keynames for each of four feedback results. This will be what state is set to by default.
let feedback = {
    feeling: '',
    understanding: '',
    support: '',
    comment: ''
}

// reducer that stores the state of each piece of feedback, using bracket notation to assign the payload to the corresponding key
const feedbackReducer = (state = feedback, action) => {
    switch (action.type) {
        case 'SET_FEEDBACK':
            return {...state, [action.keyName]: action.payload};
        default:
            return state;
    }
}

const reduxStore = createStore(
    // use combineReducers in case we add more later
    combineReducers({
        feedbackReducer
    }),
    // log reduxStore details to console
    applyMiddleware(logger)
);

ReactDOM.render(
    // make the store available to the entire app
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
