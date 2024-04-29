const initialState = {
  posts: [],
  loading: false,
  error: null,
};
const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_POST_SUCCESS":
      // console.log(action.payload);
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case "GET_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getReducer;
