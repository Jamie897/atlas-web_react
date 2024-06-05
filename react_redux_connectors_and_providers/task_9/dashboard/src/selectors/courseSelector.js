import { createSelector } from 'reselect';
import { List } from 'immutable';

// Selector to get the courses data from the state
const getCoursesState = (state) => state.courses;

// Selector to get all courses as a List
export const getAllCourses = createSelector(
  [getCoursesState],
  (coursesState) => coursesState.valueSeq().toList()
);
