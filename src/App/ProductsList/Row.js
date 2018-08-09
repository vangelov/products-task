import React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";

const ProductsListRow = ({ product }) => {
    const { name, price, currency } = product;

    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell numeric>{price}</TableCell>
            <TableCell numeric>{currency}</TableCell>

            <TableCell numeric padding="checkbox">
                <IconButton onClick={this.handleClick}>
                    <MoreVertIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default ProductsListRow;
