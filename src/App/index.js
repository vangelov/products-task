import React from "react";

import ProductsList from "./ProductsList";
import ProductCreateOrUpdate from "./ProductCreateOrUpdate";

export default class App extends React.Component {
    state = { openCreateOrUpdateDialog: false, productForUpdate: null };

    openDialogForCreating = () => {
        this.setState({
            openCreateOrUpdateDialog: true,
            productForUpdate: null
        });
    };

    openDialogForUpdating = productForUpdate => {
        this.setState({ openCreateOrUpdateDialog: true, productForUpdate });
    };

    closeDialog = () => {
        this.setState({ openCreateOrUpdateDialog: false });
    };

    render() {
        const { productForUpdate, openCreateOrUpdateDialog } = this.state;

        return (
            <div>
                <ProductsList
                    onAdd={this.openDialogForCreating}
                    onEdit={this.openDialogForUpdating}
                />

                {openCreateOrUpdateDialog && (
                    <ProductCreateOrUpdate
                        productForUpdate={productForUpdate}
                        open={openCreateOrUpdateDialog}
                        onClose={this.closeDialog}
                    />
                )}
            </div>
        );
    }
}
