import React, { useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import "./App.css";
import Modal from "./components/Modal";

const App = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [message, setmessage] = useState();

  const handleButtonClick = (value) => {
    setmodalOpen(false);
    setmessage(value);
  };

  const modal = (
    <Modal
      closeModal={handleButtonClick}
      onSubmit={handleButtonClick}
      onCancel={handleButtonClick}
    >
      <h1>This is the modal title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        fugit similique veniam nihil repellat totam facilis eaque dolorum.
      </p>
    </Modal>
  );

  return (
    <div className="app">
      {message}
      <button className="btn btn-open" onClick={() => setmodalOpen(true)}>
        Open
      </button>
      {modalOpen && ReactDOM.createPortal(modal, document.body)}
    </div>
  );
};

export default App;
