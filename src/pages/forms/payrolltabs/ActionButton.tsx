import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {  Example22, Example33, Example44 } from "../../../components/Modal";

const ActionButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      
      <p onClick={handleShowModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <circle cx="12" cy="6" r="2" fill="#000000" />

          <circle cx="12" cy="12" r="2" fill="#000000" />

          <circle cx="12" cy="18" r="2" fill="#000000" />
        </svg>
      </p>

      <Modal show={showModal} size="sm" onHide={handleCloseModal} centered>
        <Modal.Body className="d-flex">
          <Button
            variant="success "
            className="mx-3"
          >
           <Example22/>
          </Button>
          <Button variant="danger" className="mx-3" onClick={handleCloseModal}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
const ActionButton2: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      
      <p onClick={handleShowModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <circle cx="12" cy="6" r="2" fill="#000000" />

          <circle cx="12" cy="12" r="2" fill="#000000" />

          <circle cx="12" cy="18" r="2" fill="#000000" />
        </svg>
      </p>

      <Modal show={showModal} size="sm" onHide={handleCloseModal} centered>
        <Modal.Body className="d-flex">
          <Button
            variant="success "
            className="mx-3"
          >
           <Example33/>
          </Button>
          <Button variant="danger" className="mx-3" onClick={handleCloseModal}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
const ActionButton3: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      
      <p onClick={handleShowModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <circle cx="12" cy="6" r="2" fill="#000000" />

          <circle cx="12" cy="12" r="2" fill="#000000" />

          <circle cx="12" cy="18" r="2" fill="#000000" />
        </svg>
      </p>

      <Modal show={showModal} size="sm" onHide={handleCloseModal} centered>
        <Modal.Body className="d-flex">
          <Button
            variant="success "
            className="mx-3"
          >
           <Example44/>
          </Button>
          <Button variant="danger" className="mx-3" onClick={handleCloseModal}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export  {ActionButton,ActionButton2,ActionButton3 };
