import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import FieldError from "../FieldError";
import styles from "./Input.css";

const Input = (props) => {
  const { input, label, placeholder, type, disabled, meta: { touched, error }, ...otherProps } = props;

  return (
    <div {...otherProps}>
      { label && <Label text={label} /> }
      <input {...input} className={styles.input} placeholder={placeholder} type={type || "text"} disabled={disabled} />
      { touched && error && <FieldError text={error} /> }
    </div>
  );
};

export default Input;

Input.propTypes = {
  input: PropTypes.object, // The input props provided by redux-form's Form component
  meta: PropTypes.object, // The meta props provided by redux-form's Form component
  label: PropTypes.string, // The label for this field
  placeholder: PropTypes.string, // The placeholder text for this field
  type: PropTypes.string, // The type of input. Default is "text"
  disabled: PropTypes.bool, // A flag to disable this field
};
