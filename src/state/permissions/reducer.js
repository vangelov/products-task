import * as actions from './actions';

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.PERMISSIONS_GET:
      return {
        ...state,
        loading: true
      };

    case actions.PERMISSIONS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: action.products
      };
      
    default:
      return state;
  }
}
