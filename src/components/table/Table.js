import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Table.css";
import cx from "classnames";
import classNamesBind from "classnames/bind";
const moduleClassNames = classNamesBind.bind(styles);

class Table extends Component {

  getChildContext() {
    return {
      table: {}
    }
  }

  render() {
    const { className, striped, ...otherProps } = this.props;

    const classes = moduleClassNames({
      table: true,
      striped: striped
    });

    return (
      <table className={cx(classes, className)} {...otherProps} />
    );
  }
}

export default Table;

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  striped: PropTypes.bool // Table style with odd rows in a different color
}

Table.childContextTypes = {
  table: PropTypes.object,
};
