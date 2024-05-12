import React, { useState } from "react";
import SideBar from "../../component/Sidebar/SideBar";
import "../../pages/publications/Publication.css";
import StoryList from "../../component/Stories/StoryList";
import Posts from "../../component/Posts/Posts";
import SideBarRight from "../../component/Sidebar/SideBarRight";

function Publications() {
  const [search, setsearchvalue] = useState({
    adressePart: "",
    adresseArrive: "",
    prix: "",
    numplace: "",
    date: "",
    time: "",
    phone: "",
    description: "",
    globalSearch: "",
  });

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
          <Posts search={search} />
        </div>
        <div className="rightBox" style={{ width: "25%" }}>
          {/* right Box */}
          <SideBarRight setsearchvalue={setsearchvalue} search={search} />
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default Publications;
