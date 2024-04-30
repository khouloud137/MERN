import React from "react";
import "./Profile.css";
import NewPost from "../../component/Posts/NewPost/NewPost";
import Post from "../../component/Posts/post/Post";
import SideBar from "../../component/Sidebar/SideBar";
import "../../pages/profile/Profile.css";
import UserNameProfile from "../../component/userNameProfile/UserNameProfile";
function Profile() {
  return (
    <div className="profile-container">
      <div className="layout_app_profile">
        <div className="leftBox" style={{ width: "25%" }}>
          <SideBar />
        </div>
        <div  style={{ width: "50%" }}>
          <UserNameProfile />
          <NewPost />
          <Post />
        </div>
        <div className="rightBox" style={{ width: "25%" }}></div>
      </div>
    </div>
  );
}

export default Profile;
