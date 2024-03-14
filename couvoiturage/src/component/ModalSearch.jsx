import React from "react";
import "./ModalSearch.css";
function ModalSearch({ toggleSearch }) {
  return (
    <div className="search">
      <div>
        <input type="text" placeholder="Entrer votre recherche..." />

        <input type="text" placeholder="Entrer votre recherche..." />
        <button type="submit">Valider</button>
        <button onClick={toggleSearch}>fermer</button>
      </div>
    </div>
  );
}

export default ModalSearch;
