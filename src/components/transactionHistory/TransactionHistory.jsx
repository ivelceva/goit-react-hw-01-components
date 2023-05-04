import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, TableData } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <TableRow>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </TableRow>
    </TableHead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </tr>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.propTypes = {
  itemss: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

