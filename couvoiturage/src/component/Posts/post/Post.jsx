import React from "react";

import "./Post.css";

function Post({
  adressePart,
  adresseArrive,
  date,
  numplace,
  prix,
  phone,
  description,
  firstname,
  lastname,
  createdAt,
}) {
  const userImage = JSON.parse(
    localStorage.getItem("user_data")
  ).profilePicture;
  const originalDate = new Date(createdAt);
  const year = originalDate.getFullYear();
  const month = String(originalDate.getMonth() + 1).padStart(2, "0");
  const day = String(originalDate.getDate()).padStart(2, "0");
  const hours = String(originalDate.getHours()).padStart(2, "0");
  const minutes = String(originalDate.getMinutes()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

  return (
    <>
      <div className="post">
        <div className="post_user_details">
          <div className="user_image">
            <img src={userImage} alt="Profile" />
          </div>
          <div className="user_name">
            <h5>
              {firstname} {lastname}
            </h5>
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="post_actions"></div>
        <div className="post_content_details">
          <span
            style={{
              fontSize: "25px",
            }}
          >
            <b>{adressePart}</b> to <b>{adresseArrive}</b>
          </span>
          <span className="startingDate">
            <b>On road at</b> {date}
          </span>
          <span className="availablePlaces">
            <b>Available place(s)</b> {numplace}
          </span>
          <span className="Price">{prix} DTN</span>
          <span>
            <b>Phone n°</b> {phone}
          </span>
          <span>
            <b>Additional details</b> {description}
          </span>
        </div>
        <div className="post_bouttons"></div>
      </div>
    </>
  );
}

export default Post;
