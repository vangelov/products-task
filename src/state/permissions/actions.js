import * as api from "./api";

export const PERMISSIONS_GET = "PERMISSIONS_GET";
export const PERMISSIONS_GET_SUCCESS = "PERMISSIONS_GET_SUCCESS";
export const PERMISSIONS_GET_ERROR = "PERMISSIONS_GET_ERROR";
export const permissionsGet = () => async dispatch => {
    let permissions = [];
    dispatch({ type: PERMISSIONS_GET });

    try {
        permissions = await api.permissionsGet();
        dispatch({
            type: PERMISSIONS_GET_SUCCESS,
            permissions
        });
    } catch (error) {
        dispatch({
            type: PERMISSIONS_GET_ERROR,
            error: error.message
        });
    }

    return permissions;
};

export const PERMISSIONS_CLEAR_ERROR = "PERMISSIONS_CLEAR_ERROR";
export const permissionsClearError = () => ({ type: PERMISSIONS_CLEAR_ERROR });
