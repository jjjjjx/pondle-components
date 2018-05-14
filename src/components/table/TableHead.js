import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Table.css";
import cx from "classnames";

class TableHead extends Component {

  getChildContext() {
    return {
      table: {
        head: true
      }
    }
  }

  render() {
    const { className, ...otherProps } = this.props;
    return (
      <thead className={cx(styles.head, className)} {...otherProps} />
    );
  }
}

export default TableHead;

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

TableHead.childContextTypes = {
  table: PropTypes.object,
};
