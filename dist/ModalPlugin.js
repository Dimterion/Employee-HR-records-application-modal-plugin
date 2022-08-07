import React from 'react';
import "./modalPlugin.css";

function ModalPlugin({
  showModal,
  modalText
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-container",
    onClick: () => showModal(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-window",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("p", {
    className: "modal-text"
  }, modalText), /*#__PURE__*/React.createElement("button", {
    className: "modal-btn",
    onClick: () => showModal(false)
  }, "X")));
}

export default ModalPlugin;