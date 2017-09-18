import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./FieldError.css";

const FieldError = (props) => {
  const { text } = props;

  return (
    <div className={styles.fieldError}>{text}</div>
  );
};

export default FieldError;

FieldError.propTypes = {
  text: PropTypes.string.isRequired, // The error text
};
