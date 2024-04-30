import apiClient from "../../utility/apiClient";
const GET_USERPOST_REQUEST = () => {
  return { type: "GET_USERPOST_REQUEST" };
};
const GET_USERPOST_SUCCESS = (data) => {
  return {
    type: "GET_USERPOST_SUCCESS",
    payload: data,
  };
};
const GET_USERPOST_FAILURE = (error) => {
  return {
    type: "GET_USERPOST_FAILURE",
    payload: error,
  };
};

export const fetchUserPosts = () => {
  return (dispatch) => {
    dispatch(GET_USERPOST_REQUEST());
    return apiClient
      .get("/posts/GetUserposts")
      .then((response) => {
        dispatch(GET_USERPOST_SUCCESS(response.data.data));
        //  console.log(response.data.data)
      })
      .catch((err) => {
        dispatch(GET_USERPOST_FAILURE(err));
      });
  };
};
