import CONSTANTS from './CartTypes.js';

const initialState = {
    error: false,
    errorMessage: '',
    productsById: null,
    products: null,
    total: 0
};

const CartReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case CONSTANTS.FETCH_PRODUCTS_ERROR:
            return {...state, error: true, errorMessage: action.payload.message};

        case CONSTANTS.FETCH_PRODUCTS_SUCCESS:
            // debugger
            return {
                ...state,
                productsById: action.payload.entities.product,
                products: action.payload.result.products
            };

        case CONSTANTS.TOTAL_CHANGED:
            return {...state, total: action.payload};

        case CONSTANTS.QUANTITY_CHANGED: {
            // let index = action.payload.index,
            //     products = state.products;
            // products[index].quantity = action.payload.quantity;
            // let newProducts = state.products.map((el,indexProd)=> {
            //     return {...products, el[action.payload.index]: action.payload.quantity}
            // });
            return {...state};
        }

        case CONSTANTS.DELETE_FROM_CART: {
            return {
                ...state,
                products: state.products.filter((el, index) =>
                    index !== action.payload.index
                )
            };
        }

        default:
            return {...state};
    }
};
export default CartReducer;