import React from "react";
import "./Modal.css";

const Modal = ({ closeModal, onSubmit, onCancel, children }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => closeModal("Modal was closed")}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="close">&times;</p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button
            className="btn btn-cancel"
            onClick={() => onCancel("onCancel button was closed")}
          >
            Cancel
          </button>
          <button
            className="btn btn-submit"
            onClick={() => onSubmit("onSubmit button was closed")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
