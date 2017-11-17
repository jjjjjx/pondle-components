import React, { Component } from "react";
import PropTypes from "prop-types";
import NativeDateInput from "../NativeDateInput";
import DateSelectComponent from "./DateSelect";

const isTouchDevice = () => {
  const document = typeof document === 'undefined' ? '' : document;
  return document && 'ontouchstart' in document.documentElement;
}

const dateInputSupported = () => {
  try {
    let testInput = document.createElement("input");
    testInput.type = "date";
    return testInput.type !== "text";
  } catch(err) {
    return false;
  }
}

const DateSelect = (props) => {

  if (isTouchDevice() && dateInputSupported()) {
    return <NativeDateInput {...props} />;
  }

  else {
    return <DateSelectComponent {...props} />;
  }

};

export default DateSelect;

DateSelect.propTypes = {
  input: PropTypes.object, // The input props provided by redux-form's Form component
  meta: PropTypes.object, // The meta props provided by redux-form's Form component
  label: PropTypes.string, // The label for this field
  subLabel: PropTypes.string, // The label sub text, e.g. field instructions
  disabled: PropTypes.bool, // A flag to disable this field
  minYear: PropTypes.number,
  maxYear: PropTypes.number
};

DateSelect.defaultProps = {
  minYear: 1970,
  maxYear: new Date().getFullYear()
}
