import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableHeaderCell from './TableHeaderCell';
import TableBodyCell from './TableBodyCell';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },

  header: {
    backgroundColor: '#0055B8',
    color: '#fff',
  },

  selectAll: {
    color: '#fff',
  },
  rowCheckBox: {
    color: '#0055B8',
    '&checked': {
      color: '#0055B8',
    },
  },
  pegination: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: '10px 0px',
  },
});

function Blu_Table({
  data: rows,
  columns,
  onPagination,
  onRowSelect,
  onSort,
  onFilter,
  pages,
}) {
  const classes = useStyles();
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    onRowSelect && onRowSelect(selectedItems);
  }, [onRowSelect, selectedItems]);

  const handleSelectAll = useCallback(
    (event) => {
      if (event.target.checked) {
        const newSelectedItems = [...rows];
        setSelectedItems(newSelectedItems);
        return;
      }
      setSelectedItems([]);
    },
    [rows]
  );

  const handleRowSelect = useCallback(
    (event, row) => {
      let newSelectedItems;
      if (event.target.checked) {
        newSelectedItems = [...selectedItems, row];
      } else {
        newSelectedItems = selectedItems.filter((item) => item !== row);
      }

      setSelectedItems(newSelectedItems);
    },
    [selectedItems]
  );

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table padding='none'>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox' className={classes.header}>
                <Checkbox
                  color='default'
                  onChange={handleSelectAll}
                  className={classes.selectAll}
                  checked={rows.length === selectedItems.length}
                />
              </TableCell>
              {columns.map((column, i) => (
                <TableHeaderCell
                  key={i}
                  column={column}
                  classes={classes.header}
                  onSort={onSort}
                  onFilter={onFilter}
                />
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                  <TableCell padding='checkbox'>
                    <Checkbox
                      color='default'
                      className={classes.rowCheckBox}
                      onChange={(event) => handleRowSelect(event, row)}
                      checked={selectedItems.includes(row)}
                    />
                  </TableCell>
                  {columns.map((column, i) => (
                    <TableBodyCell key={i} column={column} rowData={row} />
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {pages && (
        <div className={classes.pegination}>
          <Pagination count={pages} color='primary' onChange={onPagination} />
        </div>
      )}
    </Paper>
  );
}

Blu_Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  pages: PropTypes.number,
  onPagination: PropTypes.func,
  onSort: PropTypes.func,
  onFilter: PropTypes.func,
};

export default React.memo(Blu_Table);
