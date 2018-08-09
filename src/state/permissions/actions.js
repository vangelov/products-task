import * as api from "./api";

export const PERMISSIONS_GET_SUCCESS = "PERMISSIONS_GET_SUCCESS";
export const permissionsGetSuccess = permissions => ({
    type: PERMISSIONS_GET_SUCCESS,
    permissions
});

export const PERMISSIONS_GET_ERROR = "PERMISSIONS_GET_ERROR";
export const permissionsGetError = error => ({
    type: PERMISSIONS_GET_ERROR,
    error
});

export const PERMISSIONS_GET = "PERMISSIONS_GET";
export const permissionsGet = () => async dispatch => {
    let permissions = [];
    dispatch({ type: PERMISSIONS_GET });

    try {
        permissions = await api.permissionsGet();
        dispatch(permissionsGetSuccess(permissions));
    } catch (error) {
        console.log("er", error);
        dispatch(permissionsGetError(error));
    }

    return permissions;
};
