import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Label.css";
import cx from "classnames";

const Label = (props) => {
  const { text, subText } = props;

  return (
    <label className={cx(styles.label, "pndl-form-label")}>
      {text}
      { subText && <span className={cx(styles.subLabel, "pndl-form-sublabel")}>{subText}</span> }
    </label>
  );
};

export default Label;

Label.propTypes = {
  text: PropTypes.string.isRequired, // The label text
  subText: PropTypes.string, // The label sub text, e.g. field instructions
};
