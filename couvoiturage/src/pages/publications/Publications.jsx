import React, { useEffect } from "react";
import SideBar from "../../component/Sidebar/SideBar";
import "../../pages/publications/Publication.css";
import StoryList from "../../component/Stories/StoryList";
import Posts from "../../component/Posts/Posts";
import SideBarRight from "../../component/Sidebar/SideBarRight";
import { useDispatch } from "react-redux";
import { clearValues } from "../../redux/actions/searchActions";

function Publications({ showSettings, setShowSettings }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    return () => {
      dispatch(clearValues());
    };
  }, [dispatch]);

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
          <Posts />
        </div>
        <div className="rightBox" style={{ width: "25%" }}>
          {/* right Box */}
          <SideBarRight />
        </div>
      </div>
    </div>
  );
}

export default Publications;
