import axios from 'axios';


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
                debugger
                dispatch(fetchProductsSuccess(response));
            })
            .catch(response => {
                if (response instanceof Error) {
                    dispatch(fetchProductsError(response));
                }
            })
    }
}

const CONSTANTS = {
    FETCH_PRODUCTS_BEGIN: 'FETCH_PRODUCTS_BEGIN',
    FETCH_PRODUCTS_INIT: 'FETCH_PRODUCTS_INIT',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
};

export {CONSTANTS as default};
