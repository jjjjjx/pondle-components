import React from "react";
import styles from "./Topbar.css";
import cx from "classnames";

const Topbar = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={cx(styles.topbar, className, "pndl-topbar")} {...otherProps}>
      {children}
    </div>
  );
};

export default Topbar;
