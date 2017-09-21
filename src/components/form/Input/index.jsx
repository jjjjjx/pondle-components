import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import FieldError from "../FieldError";
import styles from "./Input.css";

const Input = (props) => {
  const { input, label, subLabel, placeholder, type, disabled, meta: { touched, error }, ...otherProps } = props;

  return (
    <div {...otherProps}>
      { label && <Label text={label} subText={subLabel} /> }
      <input {...input} className={styles.input} style={touched && error && {borderColor: "red"}} placeholder={placeholder} type={type || "text"} disabled={disabled} />
      { touched && error && <FieldError text={error} /> }
    </div>
  );
};

export default Input;

Input.propTypes = {
  input: PropTypes.object, // The input props provided by redux-form's Form component
  meta: PropTypes.object, // The meta props provided by redux-form's Form component
  label: PropTypes.string, // The label for this field
  subLabel: PropTypes.string, // The label sub text, e.g. field instructions
  placeholder: PropTypes.string, // The placeholder text for this field
  type: PropTypes.string, // The type of input. Default is "text"
  disabled: PropTypes.bool, // A flag to disable this field
};
