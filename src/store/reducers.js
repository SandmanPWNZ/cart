import {combineReducers} from 'redux';

import CartReducer from '../routes/Cart/store/CartReducer';
import {reducer as form} from 'redux-form';


const reducers = combineReducers({
        CartReducer,
        form
    }
);

export default reducers;