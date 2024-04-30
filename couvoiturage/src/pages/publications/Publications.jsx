import React, { useState } from "react";
import SideBar from "../../component/Sidebar/SideBar";
import "../../pages/publications/Publication.css";
import StoryList from "../../component/Stories/StoryList";
import Posts from "../../component/Posts/Posts";
import SideBarRight from "../../component/Sidebar/SideBarRight";

function Publications() {
  const [search,setsearchvalue]= useState({firstname,lastname,description,adressePart, adresseArrive,
  prix,numplace, phone});
  const filteredValue= search.filter((post)=>post.firstname.include(search))
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
          <Posts 
          
          />
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
