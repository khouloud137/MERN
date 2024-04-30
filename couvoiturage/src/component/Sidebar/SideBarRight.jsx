import React from "react";
import "./SideBarRight.css";
import FilterSearch from "../FilterSearch/FilterSearch";

function SideBarRight() {
  return (
    <div className="SideBarRight">
      <input className="PublicationsInput" placeholder="Search..."  />
     
      <FilterSearch />
    </div>
  );
}

export default SideBarRight;
