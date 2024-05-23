import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#f5f5f5ab", // Default row background color
  },
  headerRow: {
    backgroundColor: "#deb5b545", // Header row background color
  },
  headerCell: {
    fontWeight: "bold", // Font weight for header cells
  },
  rowChecked: {
    backgroundColor: "#e6e4e4", // Row background color when checked
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(styles.headerRow)}>
          <th colSpan="2" className={css(styles.headerCell)}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.headerRow)}>
          <th className={css(styles.headerCell)}>{textFirstCell}</th>
          <th className={css(styles.headerCell)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(styles.row, isChecked && styles.rowChecked)}>
        <td>
          <input type="checkbox" onChange={handleCheckboxChange} />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
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
