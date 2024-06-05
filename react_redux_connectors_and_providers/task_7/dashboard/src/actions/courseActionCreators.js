import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';

// Action creator for selecting a course
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index
});

// Action creator for unselecting a course
export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index
});

// Action creator for setting courses after fetching
export const setCourses = (courses) => ({
  type: SET_COURSES,
  courses
});

// Asynchronous action creator to fetch courses
export const fetchCourses = () => {
  return (dispatch) => {
    return fetch('/dist/courses.json')
      .then(response => response.json())
      .then(data => dispatch(setCourses(data)))
      .catch(error => console.error('Fetching courses failed', error));
  };
};

// Function to bind action creators to dispatch
export const bindCourseActions = (dispatch) => bindActionCreators({
  selectCourse,
  unSelectCourse,
  fetchCourses
}, dispatch);
