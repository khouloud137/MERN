import React from "react";
import "./Post.css";

function Post() {
  return (
    <>
      <div className="post">
        <div className="post_user_details">
          <div className="user_image">
            <img src="https://images.pexels.com/photos/20192525/pexels-photo-20192525/free-photo-of-mode-gens-femme-jeune-fille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="user_name">
            <h5>gouttai khouloud</h5>
            <span>14 hours ago </span>
          </div>
        </div>
        <div className="post_actions"></div>
        <div className="post_content_details">
            <p>
                Hello, this is my first post ...
            </p>
        </div>
        <div className="post_bouttons"></div>
      </div>
    </>
  );
}

export default Post;
