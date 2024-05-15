import React from "react";
import "./ModalSearch.css";

function ModalSearch({ toggleSearch }) {


  return (
    <div className="search">
      <div className="ModalSearch">
        <input type="text" placeholder="Entrer votre recherche..."  />
        <input type="text" placeholder="Entrer votre recherche..." />
        <div className="ModalSearchBtn">
          <button type="submit">Valider</button>
          <button onClick={toggleSearch}>fermer</button>
        </div>
      </div>
    </div>
  );
}

export default ModalSearch;
