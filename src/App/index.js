import React from "react";

import ProductsList from "./ProductsList";
import ProductCreateOrUpdate from "./ProductCreateOrUpdate";

export default class App extends React.Component {
    state = { open: false };

    handleProductsListAdd = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <ProductsList onAdd={this.handleProductsListAdd} />
                <ProductCreateOrUpdate
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </div>
        );
    }
}
