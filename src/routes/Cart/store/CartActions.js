import axios from 'axios';
import normalizeProduct from '../../../utils/normalizr';
import CONSTANTS from './CartTypes.js';

function doRequest(method, url, data = {}) {
    return axios({
        method,
        url,
        data
    })
}

function fetchProductsSuccess(data) {
    return {
        type: CONSTANTS.FETCH_PRODUCTS_SUCCESS, payload: data
    }
}

function fetchProductsError(error) {
    return {
        type: CONSTANTS.FETCH_PRODUCTS_ERROR, payload: error
    }

}

function beginProductsFetch() {
    return {
        type: CONSTANTS.FETCH_PRODUCTS_BEGIN
    }
}

function countTotalInit(products) {
    let total = 0;
    products.forEach(el => {
        total += el.price * el.quantity;
    });

    return total
}

export function fetchProducts() {
    return dispatch => {
        dispatch(beginProductsFetch());

        return doRequest('get', 'http://5c3dfc7fa9d04f0014a98afa.mockapi.io/products')
            .then(response => {
                if (response.status === 200) {
                    dispatch(totalChanged(countTotalInit(response.data)));
                    return dispatch(fetchProductsSuccess(normalizeProduct(response.data)));
                } else {
                    return dispatch(fetchProductsError(response.statusText))
                }
            })
            .catch(response => {
                if (response instanceof Error) {
                    return dispatch(fetchProductsError(response));
                }
            })
    }
}

export function totalChanged(total) {
    return dispatch => {
        return dispatch({
            type: CONSTANTS.TOTAL_CHANGED, payload: total
        })
    }
}

export function quantityChanged(index, quantity) {
    return dispatch => {
        return dispatch({
            type: CONSTANTS.QUANTITY_CHANGED, payload: {index, quantity}
        })
    }
}

export function productRemoved(index) {
    return dispatch => {
        return dispatch({
            type: CONSTANTS.DELETE_FROM_CART, payload: index
        })
    }
}


export default 'null';