import React from "react";
import Card from "./componentsTech/Card";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/jobs";
import { Dropdown } from "react-bootstrap";
import Pagination from "../common/Pagination";

function Cards() {
  const [selectedStatus, setSelectedStatus] = useState("همه");

  const dispatch = useDispatch();
  const order = useSelector((state) => state.jobs.orders);
  const pagination = useSelector((state) => state.jobs.pagination);
  console.log(order?.length);
  useEffect(() => {
    dispatch(getAllOrders(1));
  }, []);

  // ایجاد یک آرایه جداگانه حاوی تمام حالت‌های status
  const statusOptions = [
    "همه",
    "در انتظار تایید",
    "لغو شده",
    "تحویل داده شده",
    "حمل به کارگاه",
  ];

  const [statusFilter, setStatusFilter] = useState("همه");
  const getStatusText = (statusJob) => {
    switch (statusJob) {
      case "Completed":
        return "انجام شده";
      case "Cancel":
        return "لغو شده";
      case "Carry_off":
        return "حمل به کارگاه ";
      case "High_time":
        return "کار زمان بالا ";
      case "Doing":
        return "در حال انجام ";
      case "waiting":
        return "در انتظار تایید";
      default:
        return "";
    }
  };
  console.log(pagination);
  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
      try {
        setLoading(true);
        dispatch(getAllOrders(page));
        // در اینجا منتظر بمانید تا درخواست جدید تکمیل شود
        setLoading(false);
      } catch (error) {
        // اگر خطا رخ دهد، می‌توانید اقدامات لازم را انجام دهید
        setLoading(false);
        console.error(error);
      }
    }
  };
  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setStatusFilter(status); 
  };

  const filteredData = order.filter((card) => {
    if (statusFilter === "همه") {
      return true;
    }
    return card.status === statusFilter;
  });
  // فیلتر کردن آرایه cardsData بر اساس status انتخاب شده

  return (
    <>
      <div className="container mt-3 d-flex g-3 align-items-center">
        <p>فیلتر بر اساس :</p>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="statusDropdown">
            {selectedStatus}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {statusOptions.map((statusOption) => (
              <Dropdown.Item
                key={statusOption}
                active={selectedStatus === statusOption}
                onClick={() => handleStatusChange(statusOption)}
              >
                {statusOption}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex flex-wrap mt-2">
        {order?.length === 0 && (
          <div
            className="spinner-border text-center text-dark mx-auto"
            role="status"
          ></div>
        )}
        {order?.length > 0 &&
          order?.length !== undefined &&
          filteredData?.map((data, index) => <Card key={index} {...data} />)}
      </div>
      <Pagination
        totalItems={pagination?.totalPages}
        pageSize={10}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default Cards;
