import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Label.css";

const Label = (props) => {
  const { text, subText } = props;

  return (
    <label className={styles.label}>
      {text}
      { subText && <span className={styles.subLabel}>{subText}</span> }
    </label>
  );
};

export default Label;

Label.propTypes = {
  text: PropTypes.string.isRequired, // The label text
  subText: PropTypes.string, // The label sub text, e.g. field instructions
};
