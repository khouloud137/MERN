import React from "react";
import SideBar from "../../component/Sidebar/SideBar";
import "../../pages/publications/Publication.css";
import StoryList from "../../component/Stories/StoryList";
import Posts from "../../component/Posts/Posts";
import SideBarRight from "../../component/Sidebar/SideBarRight";

function Publications() {
  return (
    <div className="publication_container">
      <div className="layout_app">
        <div className="leftBox" style={{ width: "25%" }}>
          {/* lefet  box*/}
          <SideBar />
        </div>
        <div className="middelBox" style={{ width: "50%" }}>
          {/* Middel Box */}
          <StoryList />

          <Posts />
        </div>
        <div className="rightBox" style={{ width: "25%" }}>
          {/* right Box */}
          <SideBarRight />
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default Publications;
