import * as actions from './actions';

const initialState = {
  list: [],
  isGetting: false,
  isAdding: false,
  isDeleting: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.PRODUCTS_GET:
      return {
        ...state,
        isGetting: true
      };

    case actions.PRODUCTS_GET_SUCCESS:
      return {
        ...state,
        isGetting: false,
        list: action.products
      };

    case actions.PRODUCTS_GET_ERROR:
      return {
        ...state,
        isGetting: false,
        error: action.error,
      };

    case actions.PRODUCTS_ADD:
      return {
        ...state,
        isAdding: false,
      };

    case actions.PRODUCTS_ADD_SUCCESS:
      return {
        ...state,
        isAdding: false,
      };

    case actions.PRODUCTS_ADD_ERROR:
      return {
        ...state,
        isAdding: false,
        error: action.error,
      };

    default:
      return state;
  }
}
