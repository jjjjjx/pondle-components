import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Table.css";
import cx from "classnames";

class TableRow extends Component {
  render() {
    const { className, ...otherProps } = this.props;
    return (
      <tr className={cx(styles.row, className)} {...otherProps} />
    );
  }
}

export default TableRow;

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
