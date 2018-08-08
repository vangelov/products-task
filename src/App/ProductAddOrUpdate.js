import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export class ProductAddOrUpdate extends React.Component {

  state = {
    name: null,
    price: null,
    currency: null
  };

  handleTextFieldChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { open, onClose } = this.props;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        >
        <DialogTitle>Add Product</DialogTitle>

        <DialogContent>
          <TextField
            onChange={this.handleTextFieldChange('name')}
            value={this.state.name}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="string"
            fullWidth
          />

          <TextField
            onChange={this.handleTextFieldChange('price')}
            value={this.state.price}
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
          />

          <TextField
            onChange={this.handleTextFieldChange('currency')}
            value={this.state.currency}
            id="select-currency"
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
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>

          <Button onClick={onClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
};

ProductAddOrUpdate.propTypes = {
  onAdd: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ProductAddOrUpdate;
