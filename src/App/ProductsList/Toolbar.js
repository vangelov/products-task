import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  spacer: {
    flex: '1 1 100%',
  },
  title: {
    flex: '0 0 auto',
  },
});

export const ProductsListToolbar = ({ classes, onAdd }) => {
  return (
    <Toolbar
      className={classes.root}
    >
      <div className={classes.title}>
        <Typography variant="title" id="tableTitle">
          Products
        </Typography>
      </div>
      <div className={classes.spacer} />
      <Tooltip title="Add Product">
        <IconButton onClick={onAdd}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

ProductsListToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default withStyles(styles)(ProductsListToolbar);
