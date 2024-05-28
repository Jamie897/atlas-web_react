import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';


// Define the initial state
const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  };
  
  // Define the UI reducer
  const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default uiReducer;
  