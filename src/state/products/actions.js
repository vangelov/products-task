
export const PRODUCTS_GET = 'PRODUCTS_GET';
export const PRODUCTS_GET_SUCCESS = 'PRODUCTS_GET_SUCCESS';
export const PRODUCTS_GET_ERROR = 'PRODUCTS_GET';
export const productsGet = () => ({ type: PRODUCTS_GET });

export const PRODUCTS_ADD = 'PRODUCTS_ADD';
export const PRODUCTS_ADD_SUCCESS = 'PRODUCTS_ADD_SUCCESS';
export const PRODUCTS_ADD_ERROR = 'PRODUCTS_ADD_ERROR';
export const productsAdd = (product) => ({ type: PRODUCTS_ADD, product });
