import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../table";

const DataTable = ({ columns, data, fieldKey, showHeader, ...otherProps }) => (
  <Table {...otherProps}>
    { showHeader &&
      <TableHead>
        <TableRow>
          { columns.map(column => <TableCell key={column.label}>{column.label}</TableCell>) }
        </TableRow>
      </TableHead>
    }
    <TableBody>
      {data.map(item => (
        <TableRow key={item[fieldKey]}>
          { columns.map(column => <TableCell key={column.label}>{column.resolve(item)}</TableCell>) }
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default DataTable;

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // The name of the column to display in the header
      resolve: PropTypes.func.isRequired // A function returning the value to display in the cell for this column. Receives a row item from the data array as a parameter.
    })
  ).isRequired,
  data: PropTypes.array.isRequired, // An array of items to render as table rows
  fieldKey: PropTypes.string.isRequired, // A unique identifier that must be present in each item of the data array, e.g. "uuid", "_id"
  showHeader: PropTypes.bool
}

DataTable.defaultProps = {
  showHeader: true
}
