import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import ProductsListToolbar from "./Toolbar";
import ProductsListRow from "./Row";
import * as selectors from "../../state/selectors";

const styles = theme => ({
    tableWrapper: {
        overflowX: "auto"
    },
    button: {
        paddingRight: "0px"
    }
});

class ProductsList extends React.Component {
    render() {
        const {
            classes,
            onCreate,
            onUpdate,
            isGetting,
            products,
            canCreate,
            canUpdate,
            canDelete,
            onDelete
        } = this.props;

        return (
            <Paper className={classes.root}>
                <ProductsListToolbar
                    canCreate={canCreate}
                    onCreate={onCreate}
                />

                <div className={classes.tableWrapper}>
                    {isGetting && <LinearProgress />}

                    {products.length > 0 && (
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell numeric>Price</TableCell>
                                    <TableCell numeric>Currency</TableCell>
                                    {(canUpdate || canDelete) && (
                                        <TableCell numeric />
                                    )}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {products.map(product => (
                                    <ProductsListRow
                                        key={product.id}
                                        canUpdate={canUpdate}
                                        canDelete={canDelete}
                                        onUpdate={onUpdate}
                                        onDelete={onDelete}
                                        product={product}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </Paper>
        );
    }
}

ProductsList.propTypes = {
    classes: PropTypes.object.isRequired,
    onCreate: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isGetting: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    canCreate: PropTypes.bool.isRequired,
    canUpdate: PropTypes.bool.isRequired,
    canDelete: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        isGetting:
            selectors.productsIsGetting(state) ||
            selectors.permissionsIsGetting(state),
        products: selectors.productsGet(state),
        canCreate: selectors.permissionsCanAdd(state),
        canUpdate: selectors.permissionsCanUpdate(state),
        canDelete: selectors.permissionsCanDelete(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withStyles(styles)
)(ProductsList);
