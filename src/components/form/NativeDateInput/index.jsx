import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import FieldError from "../FieldError";
import styles from "./NativeDateInput.css";
import cx from "classnames";

const NativeDateInput = (props) => {
  const { input, label, subLabel, placeholder, type, disabled, minYear, maxYear, meta: { touched, dirty, error }, ...otherProps } = props;

  const inputClassNames = cx(
    "pndl-datepicker__input",
    styles.input,
    { "hasError": (touched || dirty) && error },
    { [`${styles.hasError}`]: (touched || dirty) && error }
  );

  const onInputChange = (e) => {
    input.onChange(new Date(e.target.value));
  }

  return (
    <div {...otherProps} className={cx("pndl-datepicker", otherProps.className)}>
      { label && <Label text={label} subText={subLabel} /> }
      <input {...input} className={inputClassNames} placeholder={placeholder} type="date" min={`${minYear}-01-01`} max={`${maxYear}-12-31`} disabled={disabled} onChange={(e) => onInputChange(e)} />
      { (touched || dirty) && error && <FieldError text={error} /> }
    </div>
  );
};

export default NativeDateInput;

NativeDateInput.propTypes = {
  input: PropTypes.object, // The input props provided by redux-form's Form component
  meta: PropTypes.object, // The meta props provided by redux-form's Form component
  label: PropTypes.string, // The label for this field
  subLabel: PropTypes.string, // The label sub text, e.g. field instructions
  placeholder: PropTypes.string, // The placeholder text for this field
  disabled: PropTypes.bool, // A flag to disable this field
  minYear: PropTypes.number.isRequired,
  maxYear: PropTypes.number.isRequired
};
