import React from "react";
import PropTypes from "prop-types";
import styles from "./Spinner.css";

const Spinner = (props) => {
  const { color } = props;

  const stroke = color || "#e9e9e9";

  return (
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="154" height="144" viewBox="0 0 146 134">
      <path className={styles.path} fill="none" stroke={stroke} strokeWidth="5" strokeLinejoin="round" strokeMiterlimit="10" d="M135 27.5c-5.9-4.4-11.7-7.5-14.2-11-2.5-3.4-5.1-11.4-13.2-12.7-8.1-1.2-18 .4-20.2 11.9s5.3 14.3 6.2 21.5c.9 7.2-5.6 8.4-13.1 8.1-7.5-.3-29-.3-43.3 10S3.5 50.2 3.5 50.2 2.7 81.3 35.1 98c9.1 4.6 14.3 6.9 21.5 7.8.2 3.6.5 10.7-.1 14.2-.9 4.8 1.8 10.5 8.6 10.5h20.4s9 0 10.1-5.3c.4-2-7.1-3.7-7.1-3.7s-17 1-19.3-7.2c0 0 .1-3.9.4-8 9.9-.8 19.9-5.3 19.9-5.3s24.9-10 34.5-29.9-4.2-31.1-4.2-31.1-6.6-3.7-5-7.5c1.7-3.7 14.5 2.1 20.4 5 5.8 2.9 7.1-1.7 7.1-1.7s-1.3-4-7.3-8.3z"/>
    </svg>
  );
};

Spinner.propTypes = {
  color: PropTypes.string, // The outline color of the spinner. Default #e9e9e9
}

export default Spinner;
