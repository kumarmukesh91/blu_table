import React, { useState } from 'react';
import Table from '../blu_components/Table';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import orderBy from 'lodash/orderBy';

const useStyles = makeStyles((theme) => ({
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
  userCol: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 20,
    '& svg': {
      color: '#00000061',
    },
  },
  roleSelect: {
    color: '#0055B8',
    borderBottom: 'none',
    '&:before, &:after': {
      content: 'none',
    },
    '& svg': {
      color: '#0055B8',
    },
  },
  chip: {
    color: '#0055B8',
    marginRight: 2,
  },
  small: {
    color: '#0055B8',
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
    fontSize: '0.6rem',
  },
}));

const rowData = [
  {
    id: 'Luckyboy_1216',
    name: 'Lucas Yu 0',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1217',
    name: 'Lucas Yu 1',
    role: 'read_only',
    merchant: ['A', 'B', 'C', 'D', 'E', 'F'],
    status: 'in_active',
  },
  {
    id: 'Luckyboy_1218',
    name: 'Lucas Yu 2',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'in_active',
  },
  {
    id: 'Luckyboy_1219',
    name: 'Lucas Yu 3',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1220',
    name: 'Lucas Yu 4',
    role: 'read_only',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1221',
    name: 'Lucas Yu 5',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1222',
    name: 'Lucas Yu 6',
    role: 'read_only',
    merchant: ['A', 'B', 'C'],
    status: 'in_active',
  },
  {
    id: 'Luckyboy_1223',
    name: 'Lucas Yu 7',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1224',
    name: 'Lucas Yu 8',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'in_active',
  },
  {
    id: 'Luckyboy_1225',
    name: 'Lucas Yu 9',
    role: 'read_only',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1226',
    name: 'Lucas Yu 10',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1227',
    name: 'Lucas Yu 11',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1228',
    name: 'Lucas Yu 12',
    role: 'read_only',
    merchant: ['A', 'B', 'C'],
    status: 'in_active',
  },
  {
    id: 'Luckyboy_1229',
    name: 'Lucas Yu 13',
    role: 'read_only',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1230',
    name: 'Lucas Yu 14',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1231',
    name: 'Lucas Yu 15',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'in_active',
  },
  {
    id: 'Luckyboy_1232',
    name: 'Lucas Yu 16',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1233',
    name: 'Lucas Yu 17',
    role: 'read_only',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
  {
    id: 'Luckyboy_1234',
    name: 'Lucas Yu 18',
    role: 'full_access',
    merchant: ['A', 'B', 'C'],
    status: 'in_active',
  },
  {
    id: 'Luckyboy_1235',
    name: 'Lucas Yu 19',
    role: 'read_only',
    merchant: ['A', 'B', 'C'],
    status: 'active',
  },
];

export default function UserTable() {
  const perPageItem = 15;
  const classes = useStyles();
  const [rows, setRows] = useState(rowData.slice(0, perPageItem));
  const [order, setOrder] = useState('asc');
  const [orderByColumn, setOrderByColumn] = useState('');

  const handleRoleChange = (rowData, newRole) => {
    const newRows = rows.map((row) =>
      row !== rowData ? row : { ...row, role: newRole }
    );

    setRows(newRows);
  };

  const handleStatusChange = (rowData, newSatus) => {
    const newRows = rows.map((row) =>
      row !== rowData
        ? row
        : { ...row, status: newSatus ? 'active' : 'in_active' }
    );

    setRows(newRows);
  };

  const columns = [
    {
      id: 'id',
      label: 'User ID',
      format: (rowData) => (
        <div className={classes.userCol}>
          <span>{rowData['id']}</span>
          <VisibilityIcon />
        </div>
      ),
    },
    { id: 'name', label: 'Name' },
    {
      id: 'role',
      label: 'Role',
      format: (rowData) => (
        <Select
          value={rowData.role}
          className={classes.roleSelect}
          onChange={(event) => handleRoleChange(rowData, event.target.value)}
        >
          <MenuItem value='full_access'>Full Access</MenuItem>
          <MenuItem value='read_only'>Read Only</MenuItem>
        </Select>
      ),
    },
    {
      id: 'merchant',
      label: 'Merchant',
      format: (rowData) => {
        const merchants = rowData.merchant;
        return (
          <>
            {merchants.slice(0, 3).map((merchant) => (
              <Chip
                size='small'
                label={merchant}
                className={classes.chip}
                key={merchant}
              />
            ))}
            {merchants.length > 3 && (
              <Chip
                size='small'
                label={`+ ${merchants.length - 3}`}
                className={classes.chip}
              />
            )}
          </>
        );
      },
    },
    {
      id: 'status',
      label: 'Status',
      format: (rowData) => (
        <FormControlLabel
          control={
            <Switch
              color='primary'
              checked={rowData.status === 'active'}
              onChange={(event) =>
                handleStatusChange(rowData, event.target.checked)
              }
            />
          }
          label={rowData.status === 'active' ? 'Active' : 'Inactive'}
        />
      ),
      filterList: [
        {
          label: 'All',
          key: 'all',
        },
        {
          label: 'Active',
          key: 'active',
        },
        {
          label: 'In Active',
          key: 'in_active',
        },
      ],
    },
    {
      format: () => (
        <IconButton color='primary' component='span'>
          <MoreHorizIcon />
        </IconButton>
      ),
    },
  ];

  const handleSort = (column) => {
    const sortDirection =
      orderByColumn === column.id && order === 'asc' ? 'desc' : 'asc';
    setOrder(sortDirection);
    setOrderByColumn(column.id);

    switch (column.id) {
      case 'id':
      case 'name':
      case 'role':
      case 'merchant':
        setRows(orderBy(rows, [column.id], [sortDirection]));
        break;
      case 'status':
        setRows(orderBy(rows, (row) => row[column.id].length, [sortDirection]));
        break;

      default:
        break;
    }
  };

  const handlePagination = (event, page) => {
    const newData = rowData.slice((page - 1) * perPageItem, page * perPageItem);
    setRows(newData);
  };

  return (
    <div className='App'>
      <Table
        data={rows}
        columns={columns}
        onRowSelect={(items) => {}}
        pages={Math.ceil(rowData.length / perPageItem)}
        onPagination={handlePagination}
        onSort={handleSort}
        onFilter={(col, opt) => console.log(col, opt)}
      />
    </div>
  );
}
