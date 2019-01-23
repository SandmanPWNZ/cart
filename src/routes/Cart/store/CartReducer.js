import CONSTANTS from './CartTypes.js';

const initialState = {
    products: [],
    error: false,
    errorMessage: '',
    total: 0
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.FETCH_PRODUCTS_ERROR:
            return {...state, error: true, errorMessage: action.payload};

        case CONSTANTS.FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.payload};

        case CONSTANTS.TOTAL_CHANGED:
            return {...state, total: action.payload};

        default:
            return {...state};
    }
};
export default CartReducer;