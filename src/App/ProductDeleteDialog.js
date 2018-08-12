import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import * as selectors from "../state/selectors";
import * as actions from "../state/actions";

const ProductDeleteDialog = ({
    open,
    productToDelete,
    onClose,
    isDeleting,
    onDelete
}) => {
    const remove = () => {
        onDelete(productToDelete);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete Book</DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete{" "}
                    <strong> {productToDelete.name}</strong>?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>

                <Button
                    disabled={isDeleting}
                    onClick={remove}
                    color="secondary"
                >
                    {isDeleting ? "Deleting..." : "Delete"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

ProductDeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    productToDelete: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isDeleting: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        isDeleting: selectors.productsIsDeleting(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDelete: async productToDelete => {
            await dispatch(actions.productsDelete(productToDelete));
            ownProps.onClose();
            await dispatch(actions.productsGet());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDeleteDialog);
