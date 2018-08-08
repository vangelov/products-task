import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar';

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

export const ProductsListToolbar = ({ classes, onAdd, canAdd }) => {
  return (
    <Toolbar
      className={classes.root}
    >
      <div className={classes.title}>
        <Typography variant="title">
          Products
        </Typography>
      </div>

      <div className={classes.spacer} />

      {canAdd && <IconButton onClick={onAdd}>
        <AddIcon />
      </IconButton>}
    </Toolbar>
  );
};

ProductsListToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  canAdd: PropTypes.bool.isRequired
};

export default withStyles(styles)(ProductsListToolbar);
