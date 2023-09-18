import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';


import './index.css';
import App from './components/App/App';

const newOrderNumber = 0;

const getLastOrder = () => {
    axios.get('/api/order/lastOrder')
    .then((result) => {
        newOrderNumber = result.rows;
        console.log(result.rows);
    })
    .catch((error) => {
        console.log(error);
    })
}

const pizzaList = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload;
    }
    return state;
}

const orders = (state = [], action) => {
    if (action.type === 'GET_ORDERS') {
        return action.payload;
        }
    return state;
}

const currentCustomer = (state = [], action) => {
    console.log('Action payload for customer', action.payload);
    if (action.type === 'SET_CUSTOMER_DATA') {
        return action.payload;
    }
    else if (action.type === 'SET_NAME') {
        return [{...state, name: action.payload}] //From office hours
    }
    return state;
}

const activeOrder = (state = 0, action) => {
    if (action.type === 'SET_ORDER_NUMBER') {
        getLastOrder();
        if (newOrderNumber >= 0) {
            return newOrderNumber + 1;
        } else if (newOrderNumber === null || newOrderNumber === undefined || newOrderNumber === NaN) {
            return state = 1;
        }
    }
    return state;
}


const storeInstance = createStore(
    // reducers,{
    combineReducers({
      pizzaList,
      orders,
      currentCustomer,
    }),
    applyMiddleware(logger)
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
