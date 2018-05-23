import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.css";
import cx from "classnames";
import classNamesBind from "classnames/bind";

class Button extends Component {

  handleClick() {
    const { onClick, blurOnClick } = this.props;
    if (blurOnClick) this.buttonDOM.blur();
    if (onClick) this.props.onClick();
  }

  render() {
    const { children, href, type, component, onClick, blurOnClick, disabled, large, full, outlineOnDark, outlineOnLight, highlight, minimal, style, className, ...otherProps } = this.props;
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
      minimal: minimal
    });

    const pndlClassNames = cx(
      "pndl-button",
      { "pndl-button--disabled": disabled },
      { "pndl-button--large": large },
      { "pndl-button--full": full },
      { "pndl-button--outlineOnDark": outlineOnDark },
      { "pndl-button--outlineOnLight": outlineOnLight },
      { "pndl-button--highlight": highlight },
      { "pndl-button--minimal": minimal }
    );

    return (
      <Element
        className={cx(classes, className, pndlClassNames)}
        style={style}
        href={href}
        type={type}
        onClick={this.handleClick.bind(this)}
        ref={buttonDOM => this.buttonDOM = buttonDOM}
        disabled={disabled}
        {...otherProps} >
        {children}
      </Element>
    );
  }
};

Button.propTypes = {
  href: PropTypes.string, // Optional link address
  type: PropTypes.string, // The button type, e.g. "submit"
  componet: PropTypes.element, // Use a component as the button element, e.g. a Link for react-router
  onClick: PropTypes.func, // Click event handler function
  blurOnClick: PropTypes.bool, // If true the focus state will be removed from the button on click
  disabled: PropTypes.bool, // Disable this button
  large: PropTypes.bool, // Larger button size
  full: PropTypes.bool, // Button will span full width
  outlineOnDark: PropTypes.bool, // Outline style for use on dark backgrounds
  outlineOnLight: PropTypes.bool, // Outline style for use on light backgrounds
  highlight: PropTypes.bool, // Highlight button style
  minimal: PropTypes.bool, // Minimal button style
  style: PropTypes.object, // Custom styles object
};

export default Button;
