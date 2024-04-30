import React from "react";
import "./NewPost.css";
import { useState } from "react";
import AddPosts from "../AddPosts/AddPosts";
import { AnimatePresence, motion } from "framer-motion";

function NewPost() {
  const [showpost, setShowpost] = useState(false);
  const togglePost = () => {
    setShowpost(!showpost);
  };
  const userImage = JSON.parse(
    localStorage.getItem("user_data")
  ).profilePicture;

  return (
    <>
      <div className="new_post">
        <div className="new_post_details">
          <div className="new_post_profile_image">
            <img src={userImage} alt="" />
          </div>
          <div className="new_post_textbox">
            <AnimatePresence mode="wait">
              {!showpost ? (
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.3 }}
                  key={"textarea"}
                >
                  <textarea
                    placeholder="Add new post.."
                    onFocus={togglePost}
                  ></textarea>
                </motion.div>
              ) : (
                <AddPosts key={"AddPosts"} togglePost={togglePost} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPost;
