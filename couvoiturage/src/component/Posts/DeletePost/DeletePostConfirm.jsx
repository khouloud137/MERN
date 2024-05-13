import React from "react";
import "./DeletePostConfirm.css";

function DeletePostConfirm({ setShowDltPost, showDltPost }) {
  return (
    <div className="DeletePostConfirmWrapper">
      <div className="DeletePostConfirm">
        <p>Es-tu sur de vouloir supprimer cette annonce?</p>
        <div className="DeletePostConfirmBtns">
          <button type="button">Valider</button>
          <button type="button" onClick={() => setShowDltPost(!showDltPost)}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePostConfirm;
