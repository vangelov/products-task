import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import ProductsList from "./ProductsList";
import ProductCreateOrUpdateDialog from "./ProductCreateOrUpdateDialog";
import ProductDeleteDialog from "./ProductDeleteDialog";
import * as actions from "../state/actions";
import * as selectors from "../state/selectors";

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

        const { error, onErrorClose } = this.props;

        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={error !== null}
                    onClose={onErrorClose}
                    message={<span>{error}</span>}
                    action={
                        <IconButton onClick={onErrorClose} color="inherit">
                            <CloseIcon />
                        </IconButton>
                    }
                />

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
    onDidMount: PropTypes.func.isRequired,
    onErrorClose: PropTypes.func.isRequired,
    error: PropTypes.string
};

const mapStateToProps = state => {
    return {
        error:
            selectors.permissionsError(state) || selectors.productsError(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDidMount: async () => {
            const permissions = await dispatch(actions.permissionsGet());

            if (permissions.includes("READ")) {
                await dispatch(actions.productsGet());
            }
        },
        onErrorClose: () => {
            dispatch(actions.productsClearError());
            dispatch(actions.permissionsClearError());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
