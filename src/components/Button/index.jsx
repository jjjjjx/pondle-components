import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.css";
import classNames from "classnames/bind";

const Button = (props) => {
  const { children, href, type, onClick, disabled, large, full, outlineOnDark, outlineOnLight, highlight, style } = props;
  const Element = href ? "a" : "button";
  const role = href ? "button" : null;

  let cx = classNames.bind(styles);

  const className = cx({
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
      className={className}
      style={style}
      href={href}
      type={type || "button"}
      onClick={onClick}
      role={role}
      disabled={disabled} >
      {children}
    </Element>
  );
};

Button.propTypes = {
  href: PropTypes.string, // Optional link address
  type: PropTypes.string, // The button type, e.g. "submit". Defaults to "button".
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
