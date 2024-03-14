import React from "react";
import UsernameCard from "../component/UsernameCard/Usernamecard";
import SideBar from "../component/Sidebar/SideBar";

import StoryList from "../component/Stories/StoryList";
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
        </div>
        <div style={{ width: "25%" }}>{/* right Box */}</div>
      </div>

      {/*  */}
    </div>
  );
}

export default Publications;
