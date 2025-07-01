import React from "react";

export function ImageModal({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="model-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
