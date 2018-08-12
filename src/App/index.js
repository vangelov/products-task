import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProductsList from "./ProductsList";
import ProductCreateOrUpdateDialog from "./ProductCreateOrUpdateDialog";
import ProductDeleteDialog from "./ProductDeleteDialog";
import * as actions from "../state/actions";

export class App extends React.Component {
    state = {
        openCreateOrUpdateDialog: false,
        openDeleteDialog: false,
        productForUpdate: null,
        productToDelete: null
    };

    componentDidMount() {
        this.props.onDidMount();
    }

    openDialogForCreating = () => {
        this.setState({
            openCreateOrUpdateDialog: true,
            productForUpdate: null
        });
    };

    openDialogForUpdating = productForUpdate => {
        this.setState({ openCreateOrUpdateDialog: true, productForUpdate });
    };

    closeCreateOrUpdateDialog = () => {
        this.setState({ openCreateOrUpdateDialog: false });
    };

    openDeleteDialog = productToDelete => {
        this.setState({ openDeleteDialog: true, productToDelete });
    };

    closeDeleteDialog = product => {
        this.setState({ openDeleteDialog: false });
    };

    render() {
        const {
            productForUpdate,
            openCreateOrUpdateDialog,
            openDeleteDialog,
            productToDelete
        } = this.state;

        return (
            <div>
                <ProductsList
                    onCreate={this.openDialogForCreating}
                    onUpdate={this.openDialogForUpdating}
                    onDelete={this.openDeleteDialog}
                />

                {openCreateOrUpdateDialog && (
                    <ProductCreateOrUpdateDialog
                        productForUpdate={productForUpdate}
                        open={openCreateOrUpdateDialog}
                        onClose={this.closeCreateOrUpdateDialog}
                    />
                )}

                {openDeleteDialog && (
                    <ProductDeleteDialog
                        productToDelete={productToDelete}
                        open={openDeleteDialog}
                        onClose={this.closeDeleteDialog}
                    />
                )}
            </div>
        );
    }
}

App.propTypes = {
    onDidMount: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onDidMount: async () => {
            const permissions = await dispatch(actions.permissionsGet());

            if (permissions.includes("READ")) {
                await dispatch(actions.productsGet());
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
