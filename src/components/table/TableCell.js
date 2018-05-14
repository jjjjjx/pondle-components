import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Table.css";
import cx from "classnames";

class TableCell extends Component {
  render() {
    const { className, ...otherProps } = this.props;
    const { table } = this.context;
    const Component = table && table.head ? "th" : "td";

    return (
      <Component className={cx(styles.cell, className)} {...otherProps} />
    );
  }
}

export default TableCell;

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

TableCell.contextTypes = {
  table: PropTypes.object,
};
