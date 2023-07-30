import { useState } from "react";
import { Dropdown, Modal, Button } from "react-bootstrap";

function StatusDropdown() {
  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("تغییر وضعیت");

  const handleStatusSelect = (eventKey) => {
    setSelectedStatus(eventKey);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    alert("تغییر وضعیت با موفقیت انجام شد.");
  };

  return (
    <div>
      <Dropdown onSelect={handleStatusSelect}>
        <Dropdown.Toggle
          variant="dark"
          className="text-xs"
          size="sm mb-5 p-1"
          id="statusDropdown"
        >
          {selectedStatus}
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item eventKey="حمل به کارگاه" className="text-primary">
            حمل به کارگاه
          </Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item eventKey="کنسل شده" className="text-danger">
            کنسل شده
          </Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item eventKey="در حال انجام" className="text-success">
            در حال انجام
          </Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item eventKey="کار زمان بالا" className="text-warning">
            کار زمان بالا
          </Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item eventKey="انجام شده" className="text-info">
            انجام شده
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>توضیحات کار  {selectedStatus}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {selectedStatus === "حمل به کارگاه"
            ? "این وضعیت به معنی این است که فعالیت شما برای حمل به کارگاه آماده شده است."
            : selectedStatus === "کنسل شده"
            ? "این فعالیت کنسل شده است."
            : selectedStatus === "در حال انجام"
            ? "این فعالیت در حال انجام است."
            : selectedStatus === "کار زمان بالا"
            ? "این فعالیت به دلیل اجرای طولانی به وضعیت کار زمان بالا درآمده است."
            : "این فعالیت با موفقیت انجام شده است."}
          <p className="mb-3">لطفا توضیحات آن را وارد کنید:</p>
          <textarea className="form-control"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            انصراف
          </Button>
          <Button variant="primary" onClick={handleModalConfirm}>
            تایید
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StatusDropdown;
