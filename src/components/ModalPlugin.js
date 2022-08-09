import React from "react";
import "./modalPlugin.css";

// Rendering a component with a modal window mechanic
function ModalPlugin({ showModal, modalText }) {
  return (
    <div className="modal-container" onClick={() => showModal(false)}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <p className="modal-text">{modalText}</p>
        <button className="modal-btn" onClick={() => showModal(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default ModalPlugin;
