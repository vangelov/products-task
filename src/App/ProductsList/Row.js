import React from "react";
import PropTypes from "prop-types";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default class ProductsListRow extends React.Component {
    state = { openMenu: false };
    menuTarget = null;

    openMenu = event => {
        this.menuTarget = event.currentTarget;
        this.setState({ openMenu: true });
    };

    closeMenu = () => {
        this.menuTarget = null;
        this.setState({ openMenu: false });
    };

    handleUpdate = () => {
        this.closeMenu();
        this.props.onUpdate(this.props.product);
    };

    handleDelete = () => {
        this.closeMenu();
        this.props.onDelete(this.props.product);
    };

    render() {
        const { product, canUpdate, canDelete } = this.props;
        const { name, price, currency } = product;
        const { openMenu } = this.state;

        return (
            <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell numeric>{Number(price).toFixed(2)}</TableCell>
                <TableCell numeric>{currency}</TableCell>

                {(canUpdate || canDelete) && (
                    <TableCell numeric padding="checkbox">
                        <IconButton onClick={this.openMenu}>
                            <MoreVertIcon />
                        </IconButton>
                    </TableCell>
                )}

                <Menu
                    anchorEl={this.menuTarget}
                    open={openMenu}
                    onClose={this.close}
                >
                    {canUpdate && (
                        <MenuItem onClick={this.handleUpdate}>Update</MenuItem>
                    )}
                    {canDelete && (
                        <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
                    )}
                </Menu>
            </TableRow>
        );
    }
}

ProductsListRow.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    canUpdate: PropTypes.bool.isRequired,
    canDelete: PropTypes.bool.isRequired,
    product: PropTypes.object.isRequired
};
