const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_POST_SUCCESS":
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload], // Ajoute le nouveau post
      };
    case "ADD_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;