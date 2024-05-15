import React from "react";
import "./Style.css";
function Story(props) {
  const { type, data } = props;
  const profilePicture = data?.creator?.profilePicture || "";
  const firstname = data?.creator?.firstname || "";
 


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
            backgroundImage: `url(${
              data?.postPicture
                ? data.postPicture
                : "https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="user-details">
            {profilePicture && <img src={profilePicture} alt="" />}
          </div>
          {firstname && <h3>{firstname}</h3>}
        </div>
      )}
    </>
  );
}

export default Story;
