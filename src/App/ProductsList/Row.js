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

    handleClick = event => {
        this.menuTarget = event.currentTarget;
        this.setState({ openMenu: true });
    };

    close = () => {
        this.menuTarget = null;
        this.setState({ openMenu: false });
    };

    handleEdit = () => {
        this.props.onEdit(this.props.product);
        this.close();
    };

    render() {
        const { product, canEdit, canDelete } = this.props;
        const { name, price, currency } = product;
        const { openMenu } = this.state;

        return (
            <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell numeric>{price}</TableCell>
                <TableCell numeric>{currency}</TableCell>

                {(canEdit || canDelete) && (
                    <TableCell numeric padding="checkbox">
                        <IconButton onClick={this.handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                    </TableCell>
                )}

                <Menu
                    anchorEl={this.menuTarget}
                    open={openMenu}
                    onClose={this.close}
                >
                    {canEdit && (
                        <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
                    )}
                    {canDelete && (
                        <MenuItem onClick={this.close}>Delete</MenuItem>
                    )}
                </Menu>
            </TableRow>
        );
    }
}

ProductsListRow.propTypes = {
    onEdit: PropTypes.func.isRequired,
    canEdit: PropTypes.bool.isRequired,
    canDelete: PropTypes.bool.isRequired,
    product: PropTypes.object.isRequired
};
