import React from "react";
import "./Style.css";
function Story(props) {
  const { type, data } = props;
  return (
    <>
      {type === "new" ? (
        <div className="story new">
          <svg
            className="addIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
            />
          </svg>
          <span> Add Story</span>
        </div>
      ) : (
        <div
          className="story old"
          style={{
            backgroundImage: `url(${data.story_photo})`,
            backgroundSize: "cover",
          }}
        >
          <div className="user-details">
            <img src={data.user_photo} alt="" />
          </div>

          <h3>{data.username}</h3>
        </div>
      )}
    </>
  );
}

export default Story;
