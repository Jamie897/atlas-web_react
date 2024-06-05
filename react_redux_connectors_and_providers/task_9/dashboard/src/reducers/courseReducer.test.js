import courseReducer, { initialState } from './courseReducer';
import * as actionTypes from '../actions/courseActionTypes';
import { fromJS } from 'immutable';
import { normalize } from 'normalizr';

// Task 2
describe('courseReducer', () => {
    test('should return the default state when no action is passed', () => {
        const newState = courseReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    test('FETCH_COURSE_SUCCESS should return the data passed', () => {
        const courses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 }
        ];
        const action = { type: actionTypes.FETCH_COURSE_SUCCESS, data: courses };
        const newState = courseReducer(undefined, action);
        const expectedCourses = fromJS(courses.reduce((acc, course) => {
            acc[course.id] = { ...course, isSelected: false };
            return acc;
        }, {}));
        expect(newState.getIn(['courses'])).toEqual(expectedCourses);
    });

    test('SELECT_COURSE should return the data with the right item updated', () => {
        // Set up initial state as an Immutable Map
        const initialState = fromJS([
            { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
            { id: 3, name: 'React', isSelected: false, credit: 40 }
        ]);
        const action = {
            type: actionTypes.SELECT_COURSE,
            id: 2
        };
        const newState = courseReducer(initialState, action);
        expect(newState.get(1).get('isSelected')).toBe(true);
    });

    test('UNSELECT_COURSE should return the data with the right item updated', () => {
        // Initial state with the courses set up
        const initialStateWithCourses = fromJS({
            courses: {
                1: { id: 1, name: 'ES6', isSelected: true, credit: 60 },
                2: { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
                3: { id: 3, name: 'React', isSelected: false, credit: 40 }
            }
        });

        const action = {
            type: actionTypes.UNSELECT_COURSE,
            id: 2
        };

        // Reducer call
        const newState = courseReducer(initialStateWithCourses, action);

        // Assertion with the correct path
        expect(newState.getIn(['courses', '2', 'isSelected'])).toBe(false);
    });
});