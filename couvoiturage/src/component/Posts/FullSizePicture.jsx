import React from "react";
import "./FullSizePicture.css";

function FullSizePicture({ postPicture, showFullSize, setShowFullSize }) {
  return (
    <div
      className="FullSizePictureWrapper"
      onClick={() => setShowFullSize(!showFullSize)}
    >
      <div className="FullSizePicture">
        <img src={postPicture} alt="" />
      </div>
    </div>
  );
}

export default FullSizePicture;
