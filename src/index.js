import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux
import {reducers} from "./store";
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// const initialState = {
//     jopa: ['pipec', 'kapec']
// };

// const reducer = (state = initialState) => {
//     return state;
// };

const store = compose(applyMiddleware(thunk))(createStore)(reducers);
store.subscribe(()=>{
    console.log('store:', store.getState());
});
render(<App store={store}/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
