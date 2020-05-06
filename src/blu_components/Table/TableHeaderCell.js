import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import SortIcon from '@material-ui/icons/Sort';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import FilterBtn from './FilterBtn';

const useStyles = makeStyles({
  header: {
    position: 'relative',
    backgroundColor: '#0055B8',
    color: '#fff',
    '&:hover': {
      '& $action': {
        display: 'block',
      },
    },
  },
  container: {
    paddingLeft: 16,

    borderLeft: '1px solid #fff',
  },
  action: {
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'none',
  },
  actionBtn: {
    padding: 2,
    color: '#0055B8',
    backgroundColor: '#fff',
    marginRight: 2,
    '&:hover': {
      backgroundColor: '#fff',
    },
  },

  filterList: {
    backgroundColor: '#fff',
    color: '#000',
  },
});

function TableHeaderCell({ column, onSort, onFilter }) {
  const classes = useStyles();

  return (
    <TableCell
      align={column.align}
      style={{ minWidth: column.minWidth }}
      className={classes.header}
    >
      <div className={classes.container}>
        <span>{column.label}</span>
        <div className={classes.action}>
          <IconButton
            aria-label='sort'
            className={classes.actionBtn}
            onClick={() => onSort && onSort(column)}
          >
            <SortIcon fontSize='small' />
          </IconButton>
          {column.filterList && (
            <FilterBtn
              options={column.filterList}
              onFilter={
                onFilter && ((filterOption) => onFilter(column, filterOption))
              }
            />
          )}
        </div>
      </div>
    </TableCell>
  );
}

TableHeaderCell.propTypes = {
  column: PropTypes.object.isRequired,
  onSort: PropTypes.func,
  onFilter: PropTypes.func,
};

export default React.memo(TableHeaderCell);
