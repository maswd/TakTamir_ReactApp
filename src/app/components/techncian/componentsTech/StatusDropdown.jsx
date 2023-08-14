import { useState } from "react";
import { Dropdown, Modal, Button } from "react-bootstrap";
import { changeStatusService } from "../../../services/jobsService";
import { confirmMessage, errorMessage, successMessage } from "../../../../utils/message";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../../../redux/actions/jobs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import localStorage from "redux-persist/es/storage";

function StatusDropdown({ id, stat,name_Device,customer }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getStatusId = (statusJob) => {
    switch (statusJob) {
      case "انجام شده":
        return parseInt(1);
      case "لغو شده":
        return parseInt(2);
      case "حمل به کارگاه":
        return parseInt(4);
      case "کار زمان بالا":
        return parseInt(5);
      case "در حال انجام":
        return parseInt(3);
      default:
        return "";
    }
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("تغییر وضعیت");
  const [description, setDescription] = useState("");

  const handleStatusSelect = async (eventKey) => {
    setSelectedStatus(eventKey);
    if (eventKey === "انجام شده") {
      const result = await confirmMessage()
      if (result) {
        localStorage.setItem("orderid",id)
        localStorage.setItem("name_Device",name_Device)
        localStorage.setItem("customer",customer)
        navigate("/technician/write", { replace: true });
      
      }
    } else setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalConfirm = async (selectedStatus) => {
    setShowModal(false);
    const texts = {
      description: description,
      statusJobDto: getStatusId(selectedStatus.toString()),
    };
    try {
      const res = await changeStatusService(id, texts);
      if (res.status == 200) {
        successMessage("وضعیت تغییر کرد");
        dispatch(getAllOrders(1));
      }
      setDescription();
    } catch (error) {
      if (error.response.status === 406) {
        errorMessage("وضعیت کار توسط مدیر تایید نشده است");
      } else errorMessage("مشکلی رخ داده است !");
    }
  };

  return (
    <div>
      <Dropdown onSelect={handleStatusSelect} >
        <Dropdown.Toggle
          variant="dark"
          className="text-xs "
          size="sm mb-5 p-1"
          id="statusDropdown"
        >
          {selectedStatus}
        </Dropdown.Toggle>
        <Dropdown.Menu className="bg-gray-900 shadow-sm border border-dark">
          <Dropdown.Item
            eventKey="حمل به کارگاه"
            className={`text-primary text-xs border-bottom border-light py-2 ${
              stat === "Carry_off" ? "d-none" : ""
            }`}
          >
            حمل به کارگاه
          </Dropdown.Item>

          <Dropdown.Item
            eventKey="لغو شده"
            className={`text-danger text-xs border-bottom border-light py-2 ${
              stat === "Cancel" ? "d-none" : ""
            }`}
          >
            لغو شده
          </Dropdown.Item>

          <Dropdown.Item
            eventKey="در حال انجام"
            className={`${
              stat === "Doing" ? "d-none" : ""
            } text-info text-xs border-bottom border-light py-2 `}
          >
            در حال انجام
          </Dropdown.Item>

          <Dropdown.Item
            eventKey="کار زمان بالا"
            className={`text-warning text-xs border-bottom border-light py-2 ${
              stat === "High_time" ? "d-none" : ""
            }`}
          >
            کار زمان بالا
          </Dropdown.Item>

          <Dropdown.Item
            eventKey="انجام شده"
            className={`text-success text-xs pt-2 ${
              stat === "Completed" ? "d-none" : ""
            }`}
            disabled={stat === "Completed"}
          >
            انجام شده
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>توضیحات کار {selectedStatus}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStatus === "حمل به کارگاه"
            ? "این وضعیت به معنی این است که فعالیت شما برای حمل به کارگاه آماده شده است."
            : selectedStatus === "لغو شده"
            ? "این فعالیت لغو شده است."
            : selectedStatus === "در حال انجام"
            ? "این فعالیت در حال انجام است."
            : selectedStatus === "کار زمان بالا"
            ? "این فعالیت به دلیل اجرای طولانی به وضعیت کار زمان بالا درآمده است."
            : "این فعالیت با موفقیت انجام شده است."}
          <p className="mb-3">لطفا توضیحات آن را وارد کنید:</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            انصراف
          </Button>
          <Button
            variant="primary"
            onClick={() => handleModalConfirm(selectedStatus)}
            disabled={description?.length < 5}
          >
            تایید
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StatusDropdown;
