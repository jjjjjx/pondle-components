import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import FieldError from "../FieldError";
import styles from "./Textarea.css";

const Textarea = (props) => {
  const { input, label, subLabel, placeholder, rows, disabled, meta: { touched, error }, ...otherProps } = props;

  return (
    <div {...otherProps}>
      { label && <Label text={label} subText={subLabel} /> }
      <textarea {...input} className={styles.textarea} placeholder={placeholder} rows={rows} disabled={disabled} />
      { touched && error && <FieldError text={error} /> }
    </div>
  );
};

export default Textarea;

Textarea.propTypes = {
  input: PropTypes.object, // The input props provided by redux-form's Form component
  meta: PropTypes.object, // The meta props provided by redux-form's Form component
  label: PropTypes.string, // The label for this field
  subLabel: PropTypes.string, // The label sub text, e.g. field instructions
  placeholder: PropTypes.string, // The placeholder text for this field
  rows: PropTypes.number, // The visible number of lines in the text area
  disabled: PropTypes.bool, // A flag to disable this field
};
