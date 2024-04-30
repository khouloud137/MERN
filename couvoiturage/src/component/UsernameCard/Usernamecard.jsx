import React from "react";
// import { useSelector } from "react-redux";
import "./Usernamecard.css";
import { Link } from "react-router-dom";

function UsernameCard() {
  // const selectedData = useSelector((state) => state.user);
  // console.log(selectedData);
  const user = JSON.parse(localStorage.getItem("user_data"));

  return (
    <>
      <div className="username_card">
        <div className="username_card_image">
          <img src={user.profilePicture} alt="" />
        </div>
        <div className="username_card_info">
          <Link to="/profile" id="usernameLink">
            <h3 className="username">
              {user.firstname} {user.lastname}
            </h3>
          </Link>
          <span className="small">{user.email}</span>
        </div>
      </div>
    </>
  );
}

export default UsernameCard;
