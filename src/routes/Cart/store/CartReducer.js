import CONSTANTS from './CartTypes.js';

const initialState = {
    error: false,
    errorMessage: '',
    products: null,
    total: 0
};


const CartReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case CONSTANTS.FETCH_PRODUCTS_ERROR:
            return {...state, error: true, errorMessage: action.payload.message};

        case CONSTANTS.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            };

        case CONSTANTS.TOTAL_CHANGED:
            return {...state, total: action.payload};

        case CONSTANTS.QUANTITY_CHANGED: {
            let newProducts = state.products.map((product, indexProd) => {
                if (action.index !== indexProd) {
                    return product
                } else {
                    return {
                        ...product,
                        quantity: action.quantity
                    }
                }
            });
            return {...state, products: newProducts};
        }

        case CONSTANTS.DELETE_FROM_CART: {
            let newProducts = state.products.filter((el, index) => {
                    return index !== action.index
                }
            );
            return {
                ...state,
                products: newProducts
            };
        }

        default:
            return {...state};
    }
};
export default CartReducer;