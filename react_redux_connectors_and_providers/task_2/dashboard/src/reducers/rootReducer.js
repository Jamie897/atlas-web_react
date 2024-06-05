
import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

// Combine all the reducers into a single root reducer
const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer
});

export default rootReducer;
