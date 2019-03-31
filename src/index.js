import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

function productReducer(state = [], action) {
    return state
}

function userReducer(state = '', { type, payload }) {
    switch (type) {
        case 'updateUser':
            return payload;
    }
    return state
}

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
})

const store = createStore(
    allReducers,
    {
        products: [{ name: 'iPhone' }],
        user: 'Michael'
    },
    window.devToolsExtension && window.devToolsExtension()
)

console.log(store.getState())

const updateUserAction = {
    type: 'updateUser',
    payload: "Joe",
}

store.dispatch(updateUserAction)

console.log(store.getState())

/////////////////////////////////////////////////////////////////////////////////////////////////
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


