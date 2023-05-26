import React from "react";

function ImagePopup({ card, isOpen, onClose }) {
  const className = `popup popup_image ${isOpen ? "popup_opened" : ""}`;

  return (
    <div className={className}>
      <div className="popup__image-container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__image-fullsize"
          src={card.link}
          alt={card.name}
        />
        <h2 className="popup__image-title">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
