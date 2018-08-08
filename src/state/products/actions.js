
import * as api from './api';

export const PRODUCTS_GET_SUCCESS = 'PRODUCTS_GET_SUCCESS';
export const productsGetSuccess = products => ({ type: PRODUCTS_GET_SUCCESS, products });

export const PRODUCTS_GET_ERROR = 'PRODUCTS_GET_ERROR';
export const productsGetError = error => ({ type: PRODUCTS_GET_ERROR, error });

export const PRODUCTS_GET = 'PRODUCTS_GET';
export const productsGet = () => async dispatch => {
  let products = [];
  dispatch({ type: PRODUCTS_GET });

  try {
    products = await api.getProducts();
    dispatch(productsGetSuccess(products));
  } catch (error) {
    dispatch(productsGetError(error));
  }

  return products;

}

export const PRODUCTS_ADD = 'PRODUCTS_ADD';
export const PRODUCTS_ADD_SUCCESS = 'PRODUCTS_ADD_SUCCESS';
export const PRODUCTS_ADD_ERROR = 'PRODUCTS_ADD_ERROR';
export const productsAdd = (product) => ({ type: PRODUCTS_ADD, product });
