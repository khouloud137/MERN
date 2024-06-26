import apiClient from "../../utility/apiClient";
import { fetchPosts } from "./getALLpostAction";
import { fetchUserPosts } from "./getUserPosts";

// Action pour initier l'ajout d'un post
const addPostRequest = () => {
  return { type: "ADD_POST_REQUEST" };
};

// Action pour un ajout réussi
const addPostSuccess = (post) => {
  return {
    type: "ADD_POST_SUCCESS",
    payload: post,
  };
};

// Action pour un échec lors de l'ajout
const addPostFailure = (error) => {
  return {
    type: "ADD_POST_FAILURE",
    payload: error,
  };
};

export const addPost = (postData) => {
  return (dispatch) => {
    dispatch(addPostRequest());
    return apiClient
      .post("/posts/AddPost", postData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        dispatch(addPostSuccess(result));
        dispatch(fetchPosts());
        dispatch(fetchUserPosts());
      })
      .catch((err) => {
        console.log(err);
        dispatch(addPostFailure(err.message));
      });
  };
};

export const editPost = (postData) => {
  return (dispatch) => {
    dispatch(addPostRequest());
    return apiClient
      .put("/posts/UpdatePost", postData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        // dispatch(addPostSuccess(result));
        dispatch(fetchPosts());
        dispatch(fetchUserPosts());
      })
      .catch((err) => {
        console.log(err);
        dispatch(addPostFailure(err.message));
      });
  };
};
