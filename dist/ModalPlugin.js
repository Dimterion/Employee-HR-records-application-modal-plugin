import React from "react";
import PropTypes from "prop-types"; // Rendering a component with a modal window mechanic

function ModalPlugin({
  showModal,
  modalText,
  modalContainerStyle,
  modalWindowStyle,
  modalTextStyle,
  modalBtnStyle
}) {
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
} // Setting propTypes and defaultProps


ModalPlugin.propTypes = {
  showModal: PropTypes.func.isRequired,
  modalText: PropTypes.string.isRequired,
  modalContainerStyle: PropTypes.object,
  modalWindowStyle: PropTypes.object,
  modalTextStyle: PropTypes.object,
  modalBtnStyle: PropTypes.object
};
ModalPlugin.defaultProps = {
  modalContainerStyle: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "50%",
    left: "50%",
    zIndex: "2",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  modalWindowStyle: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  modalTextStyle: {
    width: "200px",
    zIndex: "3",
    borderRadius: "10px",
    boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.5)",
    padding: "20px",
    backgroundColor: "#fff",
    fontSize: "1.5rem",
    textAlign: "center"
  },
  modalBtnStyle: {
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
  }
};
export default ModalPlugin;