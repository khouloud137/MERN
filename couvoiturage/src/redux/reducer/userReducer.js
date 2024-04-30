const initialState = {
  userposts: [],
  loading: false,
  error: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERPOST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_USERPOST_SUCCESS":
      // console.log(action.payload);
      return {
        ...state,
        loading: false,
        userposts: action.payload,
      };
    case "GET_USERPOST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
