import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const ProductsListRow = ({ id, name, calories, fat }) => {
  return (
    <TableRow key={id}>
      <TableCell>
        {name}
      </TableCell>
      <TableCell numeric>{calories}</TableCell>
      <TableCell numeric>{fat}</TableCell>
      <TableCell numeric padding="checkbox">
        <IconButton onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default ProductsListRow;
