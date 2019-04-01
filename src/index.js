import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk'
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
    allReducers,
    {
        products: [{ name: 'iPhone' }],
        user: 'Michael'
    },
    allStoreEnhancers
)

console.log(store.getState())

const updateUserAction = {
    type: 'updateUser',
    payload: "Joe",
}

store.dispatch(updateUserAction)

console.log(store.getState())

/////////////////////////////////////////////////////////////////////////////////////////////////
ReactDOM.render(<Provider store={store}><App aRandomProp="whatever" /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


