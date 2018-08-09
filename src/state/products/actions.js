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
    newProduct,
    afterCreateCallback
) => async dispatch => {
    await dispatch(productsCreate(newProduct));
    afterCreateCallback();
    await dispatch(productsGet());
};

export const PRODUCTS_UPDATE_SUCCESS = "PRODUCTS_UPDATE_SUCCESS";
export const productsUpdateSuccess = product => ({
    type: PRODUCTS_UPDATE_SUCCESS,
    product
});

export const PRODUCTS_UPDATE_ERROR = "PRODUCTS_UPDATE_ERROR";
export const productsUpdateError = error => ({
    type: PRODUCTS_UPDATE_ERROR,
    error
});

export const PRODUCTS_UPDATE = "PRODUCTS_UPDATE";
export const productsUpdate = (productId, updatedProduct) => async dispatch => {
    dispatch({ type: PRODUCTS_UPDATE, productId, updatedProduct });

    try {
        await api.productsUpdate(productId, updatedProduct);
        dispatch(productsUpdateSuccess(updatedProduct));
    } catch (error) {
        dispatch(productsUpdateError(updatedProduct));
    }
};

export const productsUpdateAndGet = (
    productId,
    updatedProduct,
    afterUpdateCallback
) => async dispatch => {
    await dispatch(productsUpdate(productId, updatedProduct));
    afterUpdateCallback();
    await dispatch(productsGet());
};

export const PRODUCTS_DELETE_SUCCESS = "PRODUCTS_DELETE_SUCCESS";
export const productsDeleteSuccess = product => ({
    type: PRODUCTS_DELETE_SUCCESS,
    product
});

export const PRODUCTS_DELETE_ERROR = "PRODUCTS_DELETE_ERROR";
export const productsDeleteError = error => ({
    type: PRODUCTS_DELETE_ERROR,
    error
});

export const PRODUCTS_DELETE = "PRODUCTS_DELETE";
export const productsDelete = product => async dispatch => {
    dispatch({ type: PRODUCTS_DELETE });

    try {
        await api.productsDelete(product);
        dispatch(productsDeleteSuccess(product));
    } catch (error) {
        dispatch(productsDeleteError(product));
    }
};

export const productsDeleteAndGet = (
    product,
    afterDeleteCallback
) => async dispatch => {
    await dispatch(productsDelete(product));
    afterDeleteCallback();
    await dispatch(productsGet());
};
