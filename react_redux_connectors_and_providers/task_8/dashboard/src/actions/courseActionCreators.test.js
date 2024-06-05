import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { selectCourse, unSelectCourse, fetchCourses, setCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';

// Setting up a mock store with middlewares
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

  it('setCourses should create an action to set courses', () => {
    const courses = [{ id: 1, name: 'Course 1' }];
    const expectedAction = {
      type: SET_COURSES,
      courses
    };
    expect(setCourses(courses)).toEqual(expectedAction);
  });

  describe('fetchCourses asynchronous action creator', () => {
    it('dispatches SET_COURSES after a successful API request', () => {
      const store = mockStore({ courses: [] });
      const courses = [{ id: 1, name: 'Course 1' }];

      // Mock the fetch API
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(courses)
        })
      );

      const expectedActions = [
        { type: SET_COURSES, courses }
      ];

      return store.dispatch(fetchCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should handle exceptions thrown from fetch API', () => {
      const store = mockStore({ courses: [] });
      global.fetch = jest.fn(() =>
        Promise.reject('API is down')
      );

      return store.dispatch(fetchCourses()).then(() => {
        // You can check if error handling actions are dispatched here
        // For now, just confirm that no actions were dispatched
        expect(store.getActions()).toEqual([]);
      });
    });
  });
});

