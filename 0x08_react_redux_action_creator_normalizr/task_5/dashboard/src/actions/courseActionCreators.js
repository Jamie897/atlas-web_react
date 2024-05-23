// src/actions/courseActionCreators.js

import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Action creator for selecting a course
export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index
  };
};

// Action creator for unselecting a course
export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index
  };
};
