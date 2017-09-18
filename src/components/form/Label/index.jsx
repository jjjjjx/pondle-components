import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Label.css";

const Label = (props) => {
  const { text } = props;

  return (
    <label className={styles.label}>{text}</label>
  );
};

export default Label;

Label.propTypes = {
  text: PropTypes.string.isRequired, // The label text
};
