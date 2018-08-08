import * as actions from './actions';

const initialState = {
  list: [],
  getting: false,
  adding: false,
  deleting: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.PRODUCTS_GET:
      return {
        ...state,
        getting: true
      };

    case actions.PRODUCTS_GET_SUCCESS:
      return {
        ...state,
        getting: false,
        list: action.products
      };

    case actions.PRODUCTS_GET_ERROR:
      return {
        ...state,
        getting: false,
        error: action.error,
      };

    case actions.PRODUCTS_ADD:
      return {
        ...state,
        adding: false,
      };

    case actions.PRODUCTS_ADD_SUCCESS:
      return {
        ...state,
        adding: false,
      };

    case actions.PRODUCTS_ADD_ERROR:
      return {
        ...state,
        adding: false,
        error: action.error,
      };

    default:
      return state;
  }
}
