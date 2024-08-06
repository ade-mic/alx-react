import React, { Fragment } from 'react';
import PropTypes from 'prop-types';



const headerRowStyle = { backgroundColor: '#deb5b545' };
const rowStyle = { backgroundColor: '#f5f5f5ab' };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const style = isHeader ? headerRowStyle : rowStyle;
  let tr = undefined;

  if (isHeader === true) {
    if (textSecondCell === null) {
      tr = <th colSpan='2'>{textFirstCell}</th>;
    } else {
      tr = (
        <Fragment>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
    tr = (
      <Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }

  return <tr style={style}>{tr}</tr>;
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
