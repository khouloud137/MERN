import React from "react";
import "./FilterSearch.css";

function FilterSearch() {
  return (
    <div className="FilterSearch">
      <hr />
      <label>Advanced search: </label>
      <form>
        <input
          className="addPostInput"
          type="text"
          placeholder="Adresse depart"
        />
        <input
          className="addPostInput"
          type="text"
          placeholder=" Adtesse arrivé"
        />

        <input className="addPostInput" type="time" placeholder="time" />

        <input
          className="addPostInput"
          type="number"
          placeholder="membres"
          min={1}
          max={4}
        />
        <input className="addPostInput" type="text" placeholder="prix" />

        <input className="addPostInput" type="text" placeholder="description" />
      </form>
    </div>
  );
}

export default FilterSearch;
