import React from "react";

import ProductsList from "./ProductsList";
import ProductCreateOrUpdateDialog from "./ProductCreateOrUpdateDialog";

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
                    onCreate={this.openDialogForCreating}
                    onUpdate={this.openDialogForUpdating}
                />

                {openCreateOrUpdateDialog && (
                    <ProductCreateOrUpdateDialog
                        productForUpdate={productForUpdate}
                        open={openCreateOrUpdateDialog}
                        onClose={this.closeDialog}
                    />
                )}
            </div>
        );
    }
}
