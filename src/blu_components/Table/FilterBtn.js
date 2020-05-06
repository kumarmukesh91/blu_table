import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles({
  actionBtn: {
    padding: 2,
    color: '#0055B8',
    backgroundColor: '#fff',
    marginRight: 2,
    '&:hover': {
      backgroundColor: '#fff',
      '& ~ $filterMenu': {
        display: 'block',
      },
    },
  },
  filterMenu: {
    position: 'absolute',
    zIndex: 1,
    color: '#0055B8',
    backgroundColor: '#fff',
    border: '1px solid #00000080',
  },
  listIcon: {
    minWidth: 0,
  },
  checkbox: {
    color: '#0055B8',
    '&checked': {
      color: '#0055B8',
    },
  },
  label: {
    whiteSpace: 'nowrap',
  },
});

function FilterBtn({ options, onFilter }) {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <IconButton
        className={classes.actionBtn}
        onClick={() => setShowMenu(!showMenu)}
      >
        <FilterListIcon fontSize='small' />
      </IconButton>
      {showMenu && (
        <List className={classes.filterMenu}>
          {options.map((option) => (
            <ListItem key={option.key} role={undefined} dense button>
              <ListItemIcon className={classes.listIcon}>
                <Checkbox
                  color='default'
                  edge='start'
                  size='small'
                  checked={option.checked}
                  tabIndex={-1}
                  disableRipple
                  onChange={() => onFilter(option)}
                  className={classes.checkbox}
                />
              </ListItemIcon>
              <ListItemText primary={option.label} className={classes.label} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

FilterBtn.propTypes = {
  options: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default React.memo(FilterBtn);
