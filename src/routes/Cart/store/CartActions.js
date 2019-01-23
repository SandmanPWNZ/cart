import axios from 'axios';
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


export function fetchProducts() {
    return dispatch => {
        dispatch(beginProductsFetch());

        return doRequest('get', 'http://5c3dfc7fa9d04f0014a98afa.mockapi.io/products')
            .then(response => {
                if (response.status === 200) {
                    return dispatch(fetchProductsSuccess(response.data));
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

export default 'null';