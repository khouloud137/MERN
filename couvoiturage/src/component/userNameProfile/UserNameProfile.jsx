import React from "react";
import "./Style.css";

function UserNameProfile() {
  const user = JSON.parse(localStorage.getItem("user_data"));

  return (
    <>
      <div className="username-profile">
        <div className="username-profile-image">
          <img src={user.profilePicture} alt="" />
        </div>
        <div className="username-profile-info">
          <h3 className="username">
            {user.firstname} {user.lastname}
          </h3>
        </div>
      </div>
    </>
  );
}

export default UserNameProfile;
