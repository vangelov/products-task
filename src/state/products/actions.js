import * as api from "./api";

export const PRODUCTS_GET_SUCCESS = "PRODUCTS_GET_SUCCESS";
export const productsGetSuccess = products => ({
    type: PRODUCTS_GET_SUCCESS,
    products
});

export const PRODUCTS_GET_ERROR = "PRODUCTS_GET_ERROR";
export const productsGetError = error => ({ type: PRODUCTS_GET_ERROR, error });

export const PRODUCTS_GET = "PRODUCTS_GET";
export const productsGet = () => async dispatch => {
    let products = [];
    dispatch({ type: PRODUCTS_GET });

    try {
        products = await api.productsGet();
        dispatch(productsGetSuccess(products));
    } catch (error) {
        dispatch(productsGetError(error));
    }

    return products;
};

export const PRODUCTS_CREATE_SUCCESS = "PRODUCTS_CREATE_SUCCESS";
export const productsCreateSuccess = product => ({
    type: PRODUCTS_CREATE_SUCCESS,
    product
});

export const PRODUCTS_CREATE_ERROR = "PRODUCTS_CRATE_SUCCESS";
export const productsCreateError = error => ({
    type: PRODUCTS_CREATE_ERROR,
    error
});

export const PRODUCTS_CREATE = "PRODUCTS_CREATE";
export const productsCreate = product => async dispatch => {
    dispatch({ type: PRODUCTS_CREATE });

    try {
        await api.productsCreate(product);
        dispatch(productsCreateSuccess(product));
    } catch (error) {
        dispatch(productsCreateError(product));
    }
};

export const productsCreateAndGet = (
    product,
    afterCreateCallback
) => async dispatch => {
    await dispatch(productsCreate(product));
    afterCreateCallback();
    await dispatch(productsGet());
};
