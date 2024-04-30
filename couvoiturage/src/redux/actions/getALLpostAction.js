import apiClient from "../../utility/apiClient";
const GET_POST_REQUEST = () => {
  return { type: "GET_POST_REQUEST" };
};
const GET_POST_SUCCESS = (data) => {
  return {
    type: "GET_POST_SUCCESS",
    payload: data,
  };
};
const GET_POST_FAILURE = (error) => {
  return {
    type: "GET_POST_FAILURE",
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(GET_POST_REQUEST());
    return apiClient
      .get("/posts/GetAllposts")
      .then((response) => {
        dispatch(GET_POST_SUCCESS(response.data.data));
        //  console.log(response.data.data)
      })
      .catch((err) => {
        dispatch(GET_POST_FAILURE(err));
      });
  };
};
