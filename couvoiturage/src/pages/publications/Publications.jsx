import React, { useState } from "react";
import SideBar from "../../component/Sidebar/SideBar";
import "../../pages/publications/Publication.css";
import StoryList from "../../component/Stories/StoryList";
import Posts from "../../component/Posts/Posts";
import SideBarRight from "../../component/Sidebar/SideBarRight";

function Publications({ showSettings, setShowSettings }) {
  const [search, setsearchvalue] = useState({
    adressePart: "",
    adresseArrive: "",
    prix: "",
    numplace: 0,
    date: "",
    time: "",
    phone: "",
    options: [],
    globalSearch: "",
  });

  return (
    <div className="publication_container">
      <div className="layout_app">
        <div className="leftBox" style={{ width: "25%" }}>
          {/* lefet  box*/}
          <SideBar
            showSettings={showSettings}
            setShowSettings={setShowSettings}
          />
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
    </div>
  );
}

export default Publications;
