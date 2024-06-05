import React from 'react';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseShape from "./CourseShape";

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    borderCollapse: 'collapse',
  },
});

export default function CourseList({ listCourses }) {
    return (
      <table className={css(styles.courseList)} id="CourseList">
          <thead>
              <CourseListRow textFirstCell='Available courses' isHeader={true} />
              <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
          </thead>
          <tbody>
              {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false}/>) : <></>}
              {listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>))}
          </tbody>
      </table>
    );
}

CourseList.defaultProps = {
    listCourses: [],
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};
