import React from "react";

export function ImageModal({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="model-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <img className="modal-img" src={src} alt={alt} />
      </div>
    </div>
  );
}
