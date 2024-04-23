import React from "react";
import UsernameCard from "../../component/UsernameCard/Usernamecard";
import SideBar from "../../component/Sidebar/SideBar";
import "../../pages/publications/Publication.css";
import StoryList from "../../component/Stories/StoryList";
import Posts from "../../component/Posts/Posts";
function Publications() {
  return (
    <div className="publication_container">
      <div className="layout_app">
        <div style={{ width: "25%" }}>
          {/* lefet  box*/}
          <UsernameCard />
          <SideBar />
        </div>
        <div style={{ width: "50%" }}>
          {/* Middel Box */}
          <StoryList />
          <Posts />
        </div>
        <div style={{ width: "25%" }}>
          {/* right Box */}

          <input className="input" placeholder="search " />
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default Publications;
