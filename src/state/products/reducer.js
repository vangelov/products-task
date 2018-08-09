import * as actions from "./actions";

const initialState = {
    list: [],
    isGetting: false,
    isCreating: false,
    isDeleting: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
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
                error: action.error
            };

        case actions.PRODUCTS_CREATE:
            return {
                ...state,
                isCreating: true
            };

        case actions.PRODUCTS_CREATE_SUCCESS:
            return {
                ...state,
                isCreating: false
            };

        case actions.PRODUCTS_CREATE_ERROR:
            return {
                ...state,
                isCreating: false,
                error: action.error
            };

        default:
            return state;
    }
};
