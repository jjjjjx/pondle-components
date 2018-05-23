import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import styles from "./TablePagination.css";
import cx from "classnames";

class TablePagination extends Component {

  renderCaption() {
    const { count, page, rowsPerPage } = this.props;
    const from = page * rowsPerPage + 1
    const to = Math.min(count, (page + 1) * rowsPerPage);
    return `Showing ${from}-${to} of ${count}`;
  }

  renderPageNumbers() {
    const { count, page, onChangePage, rowsPerPage } = this.props;

    return (
      <div className={styles.pageNumbers}>
        { (page - 1) > 0 && <Button aria-label={`Page ${page - 1}`} minimal onClick={onChangePage.bind(this, page - 2)} blurOnClick>{ page - 1 }</Button> }
        { page > 0 && <Button aria-label={`Page ${page}`} minimal onClick={onChangePage.bind(this, page - 1)} blurOnClick>{ page }</Button> }
        <Button aria-label={`Page ${page + 1}`} minimal style={{fontWeight: "bold", pointerEvents: "none"}}>{ page + 1}</Button>
        { (page + 1) * rowsPerPage < count && <Button aria-label={`Page ${page + 2}`} minimal onClick={onChangePage.bind(this, page + 1)} blurOnClick>{ page + 2 }</Button> }
        { (page + 2) * rowsPerPage < count && <Button aria-label={`Page ${page + 3}`} minimal onClick={onChangePage.bind(this, page + 2)} blurOnClick>{ page + 3 }</Button> }
      </div>
    );
  }

  render() {
    const { className, count, page, onChangePage, rowsPerPage, ...otherProps } = this.props;

    return (
      <div className={cx(styles.pagination, "pndl-table-pagination", className)} {...otherProps}>
        <div className={cx(styles.caption, "pndl-table-pagination__caption")}>{this.renderCaption()}</div>
        { count > rowsPerPage &&
          <div className={cx(styles.controls, "pndl-table-pagination__controls")}>
            <Button aria-label="First page" minimal disabled={page === 0} className={styles.control} onClick={onChangePage.bind(this, 0)}>First</Button>
            <Button aria-label="Previous page" minimal disabled={page === 0} className={styles.control} onClick={onChangePage.bind(this, page - 1)}>Previous</Button>
            {this.renderPageNumbers()}
            <Button aria-label="Next page" minimal disabled={(page + 1) * rowsPerPage >= count} className={styles.control} onClick={onChangePage.bind(this, page + 1)}>Next</Button>
            <Button aria-label="Last page" minimal disabled={(page + 1) * rowsPerPage >= count} className={styles.control} onClick={onChangePage.bind(this, Math.ceil(count / rowsPerPage) - 1)}>Last</Button>
          </div>
        }
      </div>
    );
  }
}

export default TablePagination;

TablePagination.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number.isRequired, // The total number of rows
  onChangePage: PropTypes.func.isRequired, // Function to call when the page is changed. Receives the new page index number as a parameter.
  page: PropTypes.number.isRequired, // The index number of the current page
  rowsPerPage: PropTypes.number.isRequired // The number of rows displayed per page
}
