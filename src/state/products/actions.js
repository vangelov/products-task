import * as api from "./api";

export const PRODUCTS_GET = "PRODUCTS_GET";
export const PRODUCTS_GET_SUCCESS = "PRODUCTS_GET_SUCCESS";
export const PRODUCTS_GET_ERROR = "PRODUCTS_GET_ERROR";
export const productsGet = () => async dispatch => {
    let products = [];
    dispatch({ type: PRODUCTS_GET });

    try {
        products = await api.productsGet();
        dispatch({
            type: PRODUCTS_GET_SUCCESS,
            products
        });
    } catch (error) {
        dispatch({ type: PRODUCTS_GET_ERROR, error: error.message });
    }

    return products;
};

export const PRODUCTS_CREATE = "PRODUCTS_CREATE";
export const PRODUCTS_CREATE_SUCCESS = "PRODUCTS_CREATE_SUCCESS";
export const PRODUCTS_CREATE_ERROR = "PRODUCTS_CREATE_ERROR";
export const productsCreate = product => async dispatch => {
    dispatch({ type: PRODUCTS_CREATE, product });

    try {
        const createdProduct = await api.productsCreate(product);
        dispatch({
            type: PRODUCTS_CREATE_SUCCESS,
            product: createdProduct
        });
    } catch (error) {
        dispatch({
            type: PRODUCTS_CREATE_ERROR,
            product,
            error: error.message
        });
    }
};

export const PRODUCTS_UPDATE = "PRODUCTS_UPDATE";
export const PRODUCTS_UPDATE_SUCCESS = "PRODUCTS_UPDATE_SUCCESS";
export const PRODUCTS_UPDATE_ERROR = "PRODUCTS_UPDATE_ERROR";
export const productsUpdate = (productId, product) => async dispatch => {
    dispatch({ type: PRODUCTS_UPDATE, productId, product });

    try {
        await api.productsUpdate(productId, product);
        dispatch({
            type: PRODUCTS_UPDATE_SUCCESS,
            product
        });
    } catch (error) {
        dispatch({
            type: PRODUCTS_UPDATE_ERROR,
            product,
            error: error.message
        });
    }
};

export const PRODUCTS_DELETE = "PRODUCTS_DELETE";
export const PRODUCTS_DELETE_SUCCESS = "PRODUCTS_DELETE_SUCCESS";
export const PRODUCTS_DELETE_ERROR = "PRODUCTS_DELETE_ERROR";
export const productsDelete = product => async dispatch => {
    dispatch({ type: PRODUCTS_DELETE, product });

    try {
        await api.productsDelete(product);
        dispatch({ type: PRODUCTS_DELETE_SUCCESS, product });
    } catch (error) {
        dispatch({
            type: PRODUCTS_DELETE_ERROR,
            product,
            error: error.message
        });
    }
};
