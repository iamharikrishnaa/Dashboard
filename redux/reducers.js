// reducers.js
import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Import your auth reducer

const rootReducer = combineReducers({
  auth: authReducer, // Add your auth reducer to the root reducer
  // Add other reducers if needed
});

export default rootReducer;
