import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import ProductsListToolbar from './Toolbar';
import ProductsListRow from './Row';
import * as actions from '../../state/actions';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

const styles = theme => ({
  tableWrapper: {
    overflowX: 'auto',
  },
  button: {
    paddingRight: '0px'
  }
});

class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Donut', 452, 25.0, 51, 4.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Honeycomb', 408, 3.2, 87, 6.5),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Jelly Bean', 375, 0.0, 94, 0.0),
        createData('KitKat', 518, 26.0, 65, 7.0),
        createData('Lollipop', 392, 0.2, 98, 0.0),
        createData('Marshmallow', 318, 0, 81, 2.0),
        createData('Nougat', 360, 19.0, 9, 37.0),
        createData('Oreo', 437, 18.0, 63, 4.0),
      ],
    };
  }

  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    const { classes, onAdd } = this.props;
    const { data } = this.state;

    return (
      <Paper className={classes.root}>
        <ProductsListToolbar onAdd={onAdd} />
        <div className={classes.tableWrapper}>
          <LinearProgress />

          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell>Desser</TableCell>
                <TableCell numeric>Calories</TableCell>
                <TableCell numeric>Fat (g)</TableCell>
                <TableCell numeric></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map(product => ProductsListRow(product))}
            </TableBody>
          </Table>
        </div>

      </Paper>
    );
  }
}

ProductsList.propTypes = {
  classes: PropTypes.object.isRequired,
  onDidMount: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch(actions.productsGet());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(ProductsList);
