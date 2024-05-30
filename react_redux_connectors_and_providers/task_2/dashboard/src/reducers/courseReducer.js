import * as actionTypes from '../actions/courseActionTypes';
import { Map, fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

export const initialState = Map({
    courses: Map({}),
});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COURSE_SUCCESS:
            // Normalize the data and merge it with the state
            const normalizedData = coursesNormalizer(action.data);
            const coursesWithSelection = Object.keys(normalizedData.entities.courses).reduce((acc, courseId) => {
                acc[courseId] = { ...normalizedData.entities.courses[courseId], isSelected: false };
                return acc;
            }, {});
            return state.mergeDeep({ courses: fromJS(coursesWithSelection) });
        case actionTypes.SELECT_COURSE:
            return state.setIn(['courses', action.id, 'isSelected'], true);
        case actionTypes.UNSELECT_COURSE:
            return state.setIn(['courses', action.id.toString(), 'isSelected'], false);
        default:
            return state;
    }
};

export default courseReducer;