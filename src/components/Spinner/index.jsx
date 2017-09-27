import React from "react";
import PropTypes from "prop-types";
import styles from "./Spinner.css";

const Spinner = (props) => {
  const { color } = props;

  const stroke = color || "#e9e9e9";

  return (
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="143.6" height="135" viewBox="0 0 143.6 135">
      <path className={styles.path} fill="none" stroke={stroke} strokeWidth="5" strokeLinejoin="round" strokeMiterlimit="10" d="M134.5 27c-5.9-4.4-10.7-6.5-13.2-10-2.5-3.4-5.1-11.4-13.2-12.7-8.1-1.2-18 .4-20.2 11.9s5.3 14.3 6.2 21.5c.9 7.2-5.6 8.4-13.1 8.1-7.5-.3-29-.3-43.3 10S4 50.7 4 50.7s-.8 31.1 31.6 47.8c9.1 4.6 14.3 6.9 21.5 7.8.2 3.6.5 10.7-.1 14.2-.9 4.8 1.8 10.5 8.6 10.5H86s9 0 10.1-5.3c.4-2-7.1-3.7-7.1-3.7s-17 1-19.3-7.2c0 0 .1-3.9.4-8 9.9-.8 19.9-5.3 19.9-5.3s24.9-10 34.5-29.9-4.2-31.1-4.2-31.1-6.6-3.7-5-7.5c1.7-3.7 11.3 1.1 17.2 4 5.8 2.9 7-2 7-2s1-3.7-5-8z"/>
    </svg>
  );
};

Spinner.propTypes = {
  color: PropTypes.string, // The outline color of the spinner. Default #e9e9e9
}

export default Spinner;
