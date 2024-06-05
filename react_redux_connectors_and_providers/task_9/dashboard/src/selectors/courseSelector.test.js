import { fromJS } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('courseSelector Tests', () => {
  it('should return a List of all courses', () => {
    // Mocking the state as an Immutable Map
    const state = {
      courses: fromJS({
        1: { id: 1, title: 'Course 1' },
        2: { id: 2, title: 'Course 2' },
        3: { id: 3, title: 'Course 3' },
      })
    };

    const selected = getAllCourses(state);
    // Checking the output type to be a List
    expect(selected.constructor.name).toEqual('List');
    // Checking that we get the correct data and size
    expect(selected.size).toEqual(3);
    expect(selected.get(0).toJS()).toEqual({ id: 1, title: 'Course 1' });
    expect(selected.get(1).toJS()).toEqual({ id: 2, title: 'Course 2' });
    expect(selected.get(2).toJS()).toEqual({ id: 3, title: 'Course 3' });
  });

  it('should handle empty or undefined states gracefully', () => {
    const state = {
      courses: fromJS({})
    };
    const selected = getAllCourses(state);
    expect(selected.size).toEqual(0);

    const stateWithUndefined = {};
    const selectedFromUndefined = getAllCourses(stateWithUndefined);
    expect(selectedFromUndefined.size).toEqual(0);
  });
});
