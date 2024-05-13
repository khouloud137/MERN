import React from "react";
import "./DeletePostConfirm.css";

import apiClient from "../../../utility/apiClient";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserPosts } from "../../../redux/actions/getUserPosts";
import { fetchPosts } from "../../../redux/actions/getALLpostAction";

function DeletePostConfirm({ setShowDltPost, showDltPost, postId }) {
  const dispatch= useDispatch()
  const pathname = useLocation().pathname
  const handelDltPost = (postId) => {
    apiClient
      .delete(`posts/DeletePost/${postId}`)
      .then((response) => {
        console.log("Post deleted successfully:", response)
if(pathname === '/profile'){
   dispatch(fetchUserPosts());
}else if(pathname ==='/publications'){
  dispatch(fetchPosts());
}
        setShowDltPost(!showDltPost);

      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="DeletePostConfirmWrapper">
      <div className="DeletePostConfirm">
        <p>Es-tu sur de vouloir supprimer cette annonce?</p>
        <div className="DeletePostConfirmBtns">
          <button type="button" onClick={() => handelDltPost(postId)}>
            Valider
          </button>
          <button type="button" onClick={() => setShowDltPost(!showDltPost)}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePostConfirm;
