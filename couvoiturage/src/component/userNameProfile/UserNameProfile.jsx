import React from "react";
import "./UserNameProfile.css";

function UserNameProfile({ postsData }) {
  const user = JSON.parse(localStorage.getItem("user_data"));

  return (
    <div className="username-profile">
      <div className="username-profile-image">
        <img src={user.profilePicture} alt="" />
      </div>
      <div className="username-profile-info">
        <h1 className="username">
          {user.firstname} {user.lastname}
        </h1>
        <p>{postsData && postsData.length} Posts</p>
        <p>
          <b>Bio :</b>
          {user.bio &&
            (user.bio.length > 100 ? user.bio.slice(0, 100) + "..." : user.bio)}
        </p>
      </div>
    </div>
  );
}

export default UserNameProfile;
