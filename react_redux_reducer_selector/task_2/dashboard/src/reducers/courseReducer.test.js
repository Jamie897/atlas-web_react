// courseReducer.test.js
import courseReducer from './courseReducer';
import * as actionTypes from '../actions/courseActionTypes';

// Task 2
describe('courseReducer', () => {
    test('should return the default state when no action is passed', () => {
        const newState = courseReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    test('FETCH_COURSE_SUCCESS should return the data passed', () => {
        const courses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 }
        ];
        const newState = courseReducer(undefined, { type: actionTypes.FETCH_COURSE_SUCCESS, data: courses });
        expect(newState).toEqual(courses.map(course => ({ ...course, isSelected: false })));
    });

    test('SELECT_COURSE should return the data with the right item updated', () => {
        const initialState = [
            { id: 1, name: 'ES6', isSelected: false, credit: 60 },
            { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
            { id: 3, name: 'React', isSelected: false, credit: 40 }
        ];
        const newState = courseReducer(initialState, { type: actionTypes.SELECT_COURSE, index: 2 });
        expect(newState[1].isSelected).toBe(true);
    });

    test('UNSELECT_COURSE should return the data with the right item updated', () => {
        const initialState = [
            { id: 1, name: 'ES6', isSelected: true, credit: 60 },
            { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
            { id: 3, name: 'React', isSelected: false, credit: 40 }
        ];
        const newState = courseReducer(initialState, { type: actionTypes.UNSELECT_COURSE, index: 2 });
        expect(newState[1].isSelected).toBe(false);
    });
});