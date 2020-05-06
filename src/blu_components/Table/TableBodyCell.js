import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    paddingLeft: 16,
  },
});

function TableBodyCell({ column, rowData }) {
  const classes = useStyles();

  return (
    <TableCell align={column.align} className={classes.root}>
      {column.format ? column.format(rowData) : rowData[column.id]}
    </TableCell>
  );
}

TableBodyCell.propTypes = {
  column: PropTypes.object.isRequired,
  rowData: PropTypes.object.isRequired,
};

export default React.memo(TableBodyCell);
