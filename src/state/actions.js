import { permissionsGet } from "./permissions/actions";
import { productsGet } from "./products/actions";

export * from "./permissions/actions";
export * from "./products/actions";

export const PRODUCTS_AND_PERMISSIONS_GET = "PRODUCTS_AND_PERMISSIONS_GET";
export const productsAndPermissionsGet = () => async dispatch => {
    const permissions = await dispatch(permissionsGet());

    if (permissions.includes("READ")) {
        await dispatch(productsGet());
    }
};
