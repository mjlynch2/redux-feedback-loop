import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

const orderReducer = (state = {}, action) => {
    // Add to the order in the store
    if (action.type === 'SET_ORDER') {
        return { ...state, ...action.payload };
    }
    return state;
}

const costReducer = (state = {}, action) => {
    // Update the total cost in the store
    if (action.type === 'SET_COST') {
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    // use combineReducers in case we add more later
    combineReducers({
        orderReducer,
        costReducer
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
