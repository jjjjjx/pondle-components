import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./FieldError.css";
import cx from "classnames";

const FieldError = (props) => {
  const { text } = props;

  return (
    <div className={cx(styles.fieldError, "pndl-field-error")}>{text}</div>
  );
};

export default FieldError;

FieldError.propTypes = {
  text: PropTypes.string.isRequired, // The error text
};
