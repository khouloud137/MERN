const initialeState = {
  user: {},
  errors: null,
  loading: false,
  tempEmail: "",
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
    case "SET_LOGIN_EMAIL":
      return {
        ...state,
        tempEmail: action.payload,
      };
    case "UNSET_LOGIN_EMAIL":
      return {
        ...state,
        tempEmail: "",
      };
    default:
      return state;
  }
};
export default authReducer;
