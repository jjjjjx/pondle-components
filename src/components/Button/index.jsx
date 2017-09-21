import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.css";
import cx from "classnames";
import classNamesBind from "classnames/bind";

const Button = (props) => {
  const { children, href, type, component, onClick, disabled, large, full, outlineOnDark, outlineOnLight, highlight, style, className, ...otherProps } = props;
  let Element = href ? "a" : "button";
  Element = component ? component : Element;

  let moduleClassNames = classNamesBind.bind(styles);

  const classes = moduleClassNames({
    button: true,
    disabled: disabled,
    large: large,
    full: full,
    outlineOnDark: outlineOnDark,
    outlineOnLight: outlineOnLight,
    highlight: highlight,
  });

  return (
    <Element
      className={cx(classes, className)}
      style={style}
      href={href}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...otherProps} >
      {children}
    </Element>
  );
};

Button.propTypes = {
  href: PropTypes.string, // Optional link address
  type: PropTypes.string, // The button type, e.g. "submit"
  componet: PropTypes.element, // Use a component as the button element, e.g. a Link for react-router
  onClick: PropTypes.func, // Click event handler function
  disabled: PropTypes.bool, // Disable this button
  large: PropTypes.bool, // Larger button size
  full: PropTypes.bool, // Button will span full width
  outlineOnDark: PropTypes.bool, // Outline style for use on dark backgrounds
  outlineOnLight: PropTypes.bool, // Outline style for use on light backgrounds
  highlight: PropTypes.bool, // Highlight button style
  style: PropTypes.object, // Custom styles object
};

export default Button;
