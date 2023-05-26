import React from "react";

function PopupWithForm({ name, title, children, isOpen, onClose, buttonText, ...props }) {
  const className = `popup popup_${name} ${isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={className}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <h2 className="popup__form-title">{title}</h2>
        <form
          className={`popup__form popup__form-${name}`}
          method="post"
          name={name}
          onSubmit={props.onSubmit}
          >
          {children}
          <button className="popup__save" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
