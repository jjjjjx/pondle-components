import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Table.css";
import cx from "classnames";

class TableBody extends Component {

  getChildContext() {
    return {
      table: {
        body: true
      }
    }
  }

  render() {
    const { className, ...otherProps } = this.props;
    return (
      <tbody className={cx(styles.body, className)} {...otherProps} />
    );
  }
}

export default TableBody;

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

TableBody.childContextTypes = {
  table: PropTypes.object,
};
