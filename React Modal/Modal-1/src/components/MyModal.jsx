import React, { useEffect } from "react";

const MyModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container" onClick={closeModal}>
        <h2> STAY TUNED </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam
          ullam necessitatibus ipsa aut. Alias labore quos dolores maiores,
        </p>
        <button className="modal-btn" onClick={closeModal}>
          Accept It
        </button>
      </div>
    </>
  );
};

export default MyModal;
