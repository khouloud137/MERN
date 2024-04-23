import React from "react";
import "./NewPost.css";
import { useState } from "react";
import AddPosts from "../AddPosts/AddPosts";

function NewPost() {
  const [showpost, setShowpost] = useState(false);
  const togglePost = () => {
    setShowpost(!showpost);
  };
  return (
    <>
      <div className="new_post">
        <div className="new_post_details">
          <div className="new_post_profile_image">
            <img src='https://images.pexels.com/photos/20192525/pexels-photo-20192525/free-photo-of-mode-gens-femme-jeune-fille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"' />
          </div>
          <div className="new_post_textbox">
            <textarea
              placeholder="what is in your mind .."
              onClick={togglePost}
            ></textarea>
          </div>
        </div>
        
        {showpost && <AddPosts togglePost={togglePost} />}
      </div>
    </>
  );
}

export default NewPost;
