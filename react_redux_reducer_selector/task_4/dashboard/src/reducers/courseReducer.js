// courseReducer.js
import * as actionTypes from '../actions/courseActionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_COURSE_SUCCESS:
            return action.data.map(course => ({
                ...course,
                isSelected: false
            }));
        case actionTypes.SELECT_COURSE:
            return state.map(course =>
                course.id === action.index ? { ...course, isSelected: true } : course
            );
        case actionTypes.UNSELECT_COURSE:
            return state.map(course =>
                course.id === action.index ? { ...course, isSelected: false } : course
            );
        default:
            return state;
    }
};

export default courseReducer;