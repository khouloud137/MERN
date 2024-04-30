const initialeState = {
  user: {},
  errors: null,
  loading: false,
};
const authReducer = (state = initialeState, action) => {
  switch (action.type) {
    case "USERLOGIN-REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USERLOGIN-Errors":
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case "USERLOGIN-SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload.data.user,
      };
    default:
      return state;
  }
};
export default authReducer;
