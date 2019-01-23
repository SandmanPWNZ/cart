// reducers
import reducers from './reducers.js';

// redux
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = compose(applyMiddleware(thunk))(createStore)(reducers);
store.subscribe(() => {
    console.log('store:', store.getState());
});

export default store;