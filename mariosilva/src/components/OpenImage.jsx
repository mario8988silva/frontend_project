import React from "react";

const OpenImage = ({ src, onClose }) => {
  if (!src) return null;
  return (
    <div className="openImg" onClick={onClose}>
      <img src={src} alt="Full-size view" />
    </div>
  );
};

export default OpenImage;
