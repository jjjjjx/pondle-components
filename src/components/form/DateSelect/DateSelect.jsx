import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import FieldError from "../FieldError";
import styles from "./DateSelect.css";
import cx from "classnames";

class DateSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: "",
      day: "",
      month: "",
      year: ""
    };
  }

  componentDidMount() {
    const { input } = this.props;
    if (input.value && input.value instanceof Date) {
      this.setState({
        date: input.value,
        day: input.value.getDate(),
        month: input.value.getMonth(),
        year: input.value.getFullYear()
      });
    }
  }

  componentDidUpdate() {
    const { input } = this.props;
    const { year, month, day } = this.state;
    if (year && (month || month === 0) && day) {
      input.onChange(new Date(year, month, day));
    }
  }

  onChangeDay(e) {
    this.setState({day: e.target.value});
  }

  onChangeMonth(e) {
    this.setState({month: e.target.value});
  }

  onChangeYear(e) {
    this.setState({year: e.target.value});
  }

  renderDayOptions() {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const { day, month, year } = this.state;
    if (year && year % 4 === 0) {
      daysPerMonth[1] = 29; // Leap year
    }
    let numberOfDays = month ? daysPerMonth[month] : 31;
    let options = [<option key="label" value="">Day</option>];
    for (let i = 1; i <= numberOfDays; i++ ) {
      options = [...options, <option key={i} value={i}>{i}</option>];
    }
    return options;
  }

  renderMonthOptions() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let options = [<option key="label" value="">Month</option>];
    for (let i = 0; i < 12; i++ ) {
      options = [...options, <option key={i} value={i}>{months[i]}</option>];
    }
    return options;
  }

  renderYearOptions() {
    const { minYear, maxYear } = this.props;
    let options = [<option key="label" value="">Year</option>];
    for (let year = maxYear; year >= minYear; year--) {
      options = [...options, <option key={year} value={year}>{year}</option>];
    }
    return options;
  }

  render() {
    const { input, label, subLabel, placeholder, type, disabled, minYear, maxYear, meta: { touched, dirty, error }, ...otherProps } = this.props;

    return (
      <div {...otherProps} className={cx("pndl-date-select", otherProps.className)}>
        { label && <Label text={label} subText={subLabel} /> }
        <div className={cx(styles.fields, "pndl-date-select__fields")}>
          <select value={this.state.day} className={cx(styles.select, "pndl-date-select__select")} disabled={disabled} onChange={this.onChangeDay.bind(this)}>{this.renderDayOptions()}</select>
          <select value={this.state.month} className={cx(styles.select, "pndl-date-select__select")} disabled={disabled} onChange={this.onChangeMonth.bind(this)}>{this.renderMonthOptions()}</select>
          <select value={this.state.year} className={cx(styles.select, "pndl-date-select__select")} disabled={disabled} onChange={this.onChangeYear.bind(this)}>{this.renderYearOptions()}</select>
        </div>
        { (touched || dirty) && error && <FieldError text={error} /> }
      </div>
    );
  }
};

export default DateSelect;

DateSelect.propTypes = {
  input: PropTypes.object, // The input props provided by redux-form's Form component
  meta: PropTypes.object, // The meta props provided by redux-form's Form component
  label: PropTypes.string, // The label for this field
  subLabel: PropTypes.string, // The label sub text, e.g. field instructions
  disabled: PropTypes.bool, // A flag to disable this field
  minYear: PropTypes.number.isRequired,
  maxYear: PropTypes.number.isRequired
};
