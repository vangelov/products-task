import * as actions from "./actions";

const initialState = {
    list: [],
    isGetting: false,
    isCreating: false,
    isDeleting: false,
    isUpdating: false,
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

        case actions.PRODUCTS_UPDATE:
            return {
                ...state,
                isUpdating: true
            };

        case actions.PRODUCTS_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false
            };

        case actions.PRODUCTS_UPDATE_ERROR:
            return {
                ...state,
                isUpdating: false,
                error: action.error
            };

        case actions.PRODUCTS_DELETE:
            return {
                ...state,
                isDeleting: true
            };

        case actions.PRODUCTS_DELETE_SUCCESS:
            return {
                ...state,
                isDeleting: false
            };

        case actions.PRODUCTS_DELETE_ERROR:
            return {
                ...state,
                isDeleting: false,
                error: action.error
            };

        default:
            return state;
    }
};
