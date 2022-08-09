import React from "react";

function ModalPlugin({
  showModal,
  modalText
}) {
  // Adding the styles
  const modalContainerStyle = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "50%",
    left: "50%",
    zIndex: "2",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  };
  const modalWindowStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };
  const modalTextStyle = {
    width: "200px",
    zIndex: "3",
    borderRadius: "10px",
    boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.5)",
    padding: "20px",
    backgroundColor: "#fff",
    fontSize: "1.5rem",
    textAlign: "center"
  };
  const modalBtnStyle = {
    cursor: "pointer",
    position: "fixed",
    top: "22%",
    left: "98%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    backgroundColor: "#000",
    color: "#fff",
    padding: "5px 8px",
    border: "1px solid #000",
    fontWeight: "bold"
  }; // Rendering a component with a modal window mechanic

  return /*#__PURE__*/React.createElement("div", {
    style: modalContainerStyle,
    onClick: () => showModal(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: modalWindowStyle,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("p", {
    style: modalTextStyle
  }, modalText), /*#__PURE__*/React.createElement("button", {
    style: modalBtnStyle,
    onClick: () => showModal(false)
  }, "X")));
}

export default ModalPlugin;