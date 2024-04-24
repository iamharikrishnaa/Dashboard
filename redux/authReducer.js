// authReducer.js
const initialState = {
    token: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload.token,
        };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default authReducer;
  