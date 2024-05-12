import React from "react";
import "./FilterSearch.css";

function FilterSearch({ setsearchvalue, search }) {
  return (
    <div className="FilterSearch">
      <hr />
      <label>Advanced search: </label>
      <form>
        <input
          className="addPostInput"
          type="text"
          placeholder="Adresse depart"
          onChange={(e) => {
            setsearchvalue({
              ...search,
              adressePart: e.target.value,
              globalSearch: "",
            });
          }}
        />
        <input
          className="addPostInput"
          type="text"
          placeholder=" Adtesse arrivé"
          onChange={(e) => {
            setsearchvalue({
              ...search,
              adresseArrive: e.target.value,
              globalSearch: "",
            });
          }}
        />

        <input
          className="addPostInput"
          type="date"
          placeholder="date"
          onChange={(e) => {
            setsearchvalue({
              ...search,
              date: e.target.value,
              globalSearch: "",
            });
          }}
        />
        <input
          className="addPostInput"
          type="time"
          placeholder="time"
          onChange={(e) => {
            setsearchvalue({
              ...search,
              time: e.target.value,
              globalSearch: "",
            });
          }}
        />

        <input
          className="addPostInput"
          type="number"
          placeholder="membres"
          min={1}
          max={4}
          onChange={(e) => {
            setsearchvalue({
              ...search,
              numplace: e.target.value,
              globalSearch: "",
            });
          }}
        />
        <input
          className="addPostInput"
          type="text"
          placeholder="prix"
          onChange={(e) => {
            setsearchvalue({
              ...search,
              prix: e.target.value,
              globalSearch: "",
            });
          }}
        />

        <input
          className="addPostInput"
          type="text"
          placeholder="description"
          onChange={(e) => {
            setsearchvalue({
              ...search,
              description: e.target.value,
              globalSearch: "",
            });
          }}
        />
      </form>
    </div>
  );
}

export default FilterSearch;
