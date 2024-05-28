// src/actions/courseActionCreators.test.js

import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Course Action Creators', () => {
  it('selectCourse should create an action to select a course', () => {
    const expectedAction = {
      type: SELECT_COURSE,
      index: 1
    };
    expect(selectCourse(1)).toEqual(expectedAction);
  });

  it('unSelectCourse should create an action to unselect a course', () => {
    const expectedAction = {
      type: UNSELECT_COURSE,
      index: 1
    };
    expect(unSelectCourse(1)).toEqual(expectedAction);
  });
});
