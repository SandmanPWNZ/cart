import {combineReducers} from 'redux';

import CartReducer from '../routes/Cart/store/CartReducer';
import {reducer as FormReducer} from 'redux-form';


const reducers = combineReducers({
        CartReducer,
        FormReducer
    }
);

export default reducers;