import CONSTANTS from './CartActions.js';

const CartReducer = (
    state = {
        products: []
    }, action) => {
    switch (action.type) {
        case CONSTANTS.FETCH_PRODUCTS_INIT:
            return {...state, products: action.payload};
        default:
            return {...state};
    }
};
export default CartReducer;