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

  initialState = {
    name: '',
    price: '',
    currency: ''
  };

  state = this.initialState;

  handleTextFieldChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  close = () => {
    const { onClose } = this.props;
    this.setState(this.initialState, onClose);
  }

  render() {
    const { open } = this.props;

    return (
      <Dialog
        open={open}
        onClose={this.close}
        >
        <DialogTitle>Add Product</DialogTitle>

        <DialogContent>
          <TextField
            onChange={this.handleTextFieldChange('name')}
            value={this.state.name}
            autoFocus
            margin="dense"
            label="Name"
            type="string"
            fullWidth
          />

          <TextField
            onChange={this.handleTextFieldChange('price')}
            value={this.state.price}
            margin="dense"
            label="Price"
            type="number"
            fullWidth
          />

          <TextField
            onChange={this.handleTextFieldChange('currency')}
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

          <Button onClick={this.close} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
};

ProductAddOrUpdate.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ProductAddOrUpdate;
