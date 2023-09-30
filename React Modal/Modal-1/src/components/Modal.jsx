import React, { useState } from "react";
import MyModal from "./MyModal";

const Modal = () => {
  const [ShowModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <button className="modal-btn" onClick={openModal}>
        Open Modal
      </button>
      {ShowModal && <MyModal closeModal={closeModal} />}
    </>
  );
};

export default Modal;
