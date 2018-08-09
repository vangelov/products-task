import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./state/store";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById("root")
);
