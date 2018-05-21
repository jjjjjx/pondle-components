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
    const { count, onChangePage, page, rowsPerPage } = this.props;
    return (
      <div className={styles.pageNumbers}>
        { (page - 1) > 0 && <Button minimal onClick={onChangePage.bind(this, page - 2)}>{ page - 1 }</Button> }
        { page > 0 && <Button minimal onClick={onChangePage.bind(this, page - 1)}>{ page }</Button> }
        <Button minimal style={{fontWeight: "bold", pointerEvents: "none"}}>{ page + 1}</Button>
        { (page + 1) * rowsPerPage <= count && <Button minimal onClick={onChangePage.bind(this, page + 1)}>{ page + 2 }</Button> }
        { (page + 2) * rowsPerPage <= count && <Button minimal onClick={onChangePage.bind(this, page + 2)}>{ page + 3 }</Button> }
      </div>
    );
  }

  render() {
    const { className, count, onChangePage, page, rowsPerPage, ...otherProps } = this.props;

    return (
      <div className={cx(styles.pagination, "pndl-table-pagination", className)} {...otherProps}>
        <div className={cx(styles.caption, "pndl-table-pagination__caption")}>{this.renderCaption()}</div>
        <div className={cx(styles.controls, "pndl-table-pagination__controls")}>
          <Button minimal disabled={page === 0} className={styles.control} onClick={onChangePage.bind(this, 0)}>First</Button>
          <Button minimal disabled={page === 0} className={styles.control} onClick={onChangePage.bind(this, page - 1)}>Previous</Button>
          {this.renderPageNumbers()}
          <Button minimal disabled={(page + 1) * rowsPerPage >= count} className={styles.control} onClick={onChangePage.bind(this, page + 1)}>Next</Button>
          <Button minimal disabled={(page + 1) * rowsPerPage >= count} className={styles.control} onClick={onChangePage.bind(this, Math.floor(count / rowsPerPage))}>Last</Button>
        </div>
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
