import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const MyModal = ({ title, content, onConfirm, onCancel }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  const [resolve, setResolve] = useState(null);

  useEffect(() => {
    if (show) {
      const handleKeyDown = (event) => {
        if (event.keyCode === 27) {
          onCancel();
          handleClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [show, onCancel]);

  const handleClose = () => {
    setShow(false);
    onCancel();
    resolve(false);
  };
  const handleClick = async () => {
    const result = await showModal();
    console.log(result); // نتیجه‌ی کلیک کاربر
  };
  
  const handleConfirm = () => {
    setShow(false);
    onConfirm();
    resolve(true);
  };

  const showModal = () => {
    setShow(true);
    return new Promise((resolve) => {
      setResolve(() => resolve);
    });
  };

  const waitForResponse = async () => {
    const result = await new Promise((resolve) => {
      setResolve(() => resolve);
    });
    return result;
  };

  return (
    <>
      <Button variant="primary" onClick={showModal}>
        نمایش Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            لغو
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            تایید
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
