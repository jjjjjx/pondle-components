import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import FieldError from "../FieldError";
import styles from "./Select.css";

const Select = (props) => {
  const { input, label, subLabel, disabled, children, meta: { touched, error }, ...otherProps } = props;

  return (
    <div {...otherProps}>
      { label && <Label text={label} subText={subLabel} /> }
      <div className={styles.select}>
        <select {...input} style={touched && error && {borderColor: "red"}} disabled={disabled}>
          {children}
        </select>
      </div>
      { touched && error && <FieldError text={error} /> }
    </div>
  );
};

export default Select;

Select.propTypes = {
  input: PropTypes.object.isRequired, // The input props provided by redux-form's Form component
  meta: PropTypes.object, // The meta props provided by redux-form's Form component
  label: PropTypes.string, // The label for this field
  subLabel: PropTypes.string, // The label sub text, e.g. field instructions
  disabled: PropTypes.bool, // A flag to disable this field
  children: PropTypes.oneOfType([ // The children of a <Select> should be <option>s
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
