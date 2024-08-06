import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  bodyRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerCell: {
    textAlign: 'left',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
  },
  headerCellColSpan2: {
    textAlign: 'center',
  },
  bodyCell: {
    textAlign: 'left',
  }
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = isHeader ? styles.headerRow : styles.bodyRow;
  const cellStyle = isHeader ? styles.headerCell : styles.bodyCell;

  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan='2' className={css(styles.headerCellColSpan2)}>{textFirstCell}</th>
        ) : (
          <Fragment>
            <th className={css(cellStyle)}>{textFirstCell}</th>
            <th className={css(cellStyle)}>{textSecondCell}</th>
          </Fragment>
        )
      ) : (
        <Fragment>
          <td className={css(cellStyle)}>{textFirstCell}</td>
          <td className={css(cellStyle)}>{textSecondCell}</td>
        </Fragment>
      )}
    </tr>
  );
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
