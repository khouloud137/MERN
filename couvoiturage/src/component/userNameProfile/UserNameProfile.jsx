import React from "react";
import "./Style.css";

function UserNameProfile() {
  return (
    <>
      <div className="username-profile">
        <div className="username-profile-image">
          <img src="https://images.pexels.com/photos/20192525/pexels-photo-20192525/free-photo-of-mode-gens-femme-jeune-fille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div className="username-profile-info">
          <h3 className="username"> khouloud Gouttai </h3>
        </div>
      </div>
    </>
  );
}

export default UserNameProfile;
