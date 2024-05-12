import React from "react";
import "./SideBarRight.css";
import FilterSearch from "../FilterSearch/FilterSearch";

function SideBarRight({ setsearchvalue, search }) {
  return (
    <div className="SideBarRight">
      <input
        className="PublicationsInput"
        placeholder="Search..."
        onChange={(e) => {
          setsearchvalue({
            adressePart: "",
            adresseArrive: "",
            prix: "",
            numplace: "",
            date: "",
            time:"",
            phone: "",
            description: "",
            globalSearch: e.target.value,
          });
        }}
      />

      <FilterSearch search={search} setsearchvalue={setsearchvalue} />
    </div>
  );
}

export default SideBarRight;
