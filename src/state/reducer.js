import { combineReducers } from "redux";

import products from "./products/reducer";
import permissions from "./permissions/reducer";

export default combineReducers({
    products,
    permissions
});
