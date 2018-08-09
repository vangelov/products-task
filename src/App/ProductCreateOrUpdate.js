import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import * as selectors from "../state/selectors";
import * as actions from "../state/actions";

const currencies = [
    {
        value: "USD",
        label: "$"
    },
    {
        value: "EUR",
        label: "€"
    },
    {
        value: "JPY",
        label: "¥"
    }
];

export class ProductCreateOrUpdate extends React.Component {
    constructor(props) {
        super(props);

        const { productForUpdate } = props;

        this.state = {
            name: productForUpdate ? productForUpdate.name : "",
            nameValid: true,
            price: productForUpdate ? productForUpdate.price : "",
            priceValid: true,
            currency: productForUpdate ? productForUpdate.currency : "",
            currencyValid: true
        };
    }

    handleTextFieldChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    close = () => {
        this.props.onClose();
    };

    validate = onValid => {
        const { name, price, currency } = this.state;
        const nameValid = !!name;
        const priceValid = !!price;
        const currencyValid = !!currency;

        this.setState({ nameValid, priceValid, currencyValid }, () => {
            if (nameValid && priceValid && currencyValid) {
                const product = { name, price, currency };
                onValid(product);
            }
        });
    };

    add = () => {
        this.validate(newProduct => this.props.onCreate(newProduct));
    };

    update = () => {
        this.validate(updatedProduct =>
            this.props.onUpdate(this.props.productForUpdate.id, updatedProduct)
        );
    };

    render() {
        const { open, isCreating, isUpdating, productForUpdate } = this.props;
        const { nameValid, priceValid, currencyValid } = this.state;

        return (
            <Dialog open={open} onClose={this.close}>
                <DialogTitle>
                    {productForUpdate ? "Update Product" : "Add Product"}
                </DialogTitle>

                <DialogContent>
                    <TextField
                        required
                        error={!nameValid}
                        helperText={nameValid ? "" : "Please enter a value"}
                        disabled={isCreating}
                        onChange={this.handleTextFieldChange("name")}
                        value={this.state.name}
                        autoFocus={!productForUpdate}
                        margin="dense"
                        label="Name"
                        type="string"
                        fullWidth
                    />

                    <TextField
                        required
                        disabled={isCreating}
                        error={!priceValid}
                        helperText={nameValid ? "" : "Please enter a value"}
                        onChange={this.handleTextFieldChange("price")}
                        value={this.state.price}
                        margin="dense"
                        label="Price"
                        type="number"
                        fullWidth
                    />

                    <TextField
                        required
                        disabled={isCreating}
                        error={!currencyValid}
                        helperText={nameValid ? "" : "Please select a value"}
                        onChange={this.handleTextFieldChange("currency")}
                        value={this.state.currency}
                        select
                        fullWidth
                        label="Currency"
                        margin="dense"
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.close} color="secondary">
                        Cancel
                    </Button>

                    {productForUpdate ? (
                        <Button
                            onClick={this.update}
                            disabled={isUpdating}
                            color="primary"
                        >
                            {isUpdating ? "Updating..." : "Update"}
                        </Button>
                    ) : (
                        <Button
                            onClick={this.add}
                            disabled={isCreating}
                            color="primary"
                        >
                            {isCreating ? "Addding..." : "Add"}
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        );
    }
}

ProductCreateOrUpdate.propTypes = {
    onClose: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    productForUpdate: PropTypes.object,
    open: PropTypes.bool.isRequired,
    isCreating: PropTypes.bool.isRequired,
    isUpdating: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        isCreating: selectors.productsIsCreating(state),
        isUpdating: selectors.productsIsUpdating(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCreate: newProduct => {
            dispatch(
                actions.productsCreateAndGet(newProduct, ownProps.onClose)
            );
        },
        onUpdate: (productId, updatedProduct) => {
            dispatch(
                actions.productsUpdateAndGet(
                    productId,
                    updatedProduct,
                    ownProps.onClose
                )
            );
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCreateOrUpdate);
