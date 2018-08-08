import * as actions from './actions';

const initialState = {
  list: [],
  isGetting: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.PERMISSIONS_GET:
      return {
        ...state,
        isGetting: true
      };

    case actions.PERMISSIONS_GET_SUCCESS:
      return {
        ...state,
        isGetting: false,
        list: action.permissions
      };

    case actions.PERMISSIONS_GET_ERROR:
      return {
        ...state,
        isGetting: false,
        error: action.error,
      };

    default:
      return state;
  }
}
