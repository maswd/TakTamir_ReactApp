import React from "react";
import Card from "./componentsTech/Card";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/jobs";
import { Dropdown } from "react-bootstrap";
import Pagination from "../common/Pagination";
import { getStatusText } from "../../../utils/convertor";

function Cards() {
  const [selectedStatus, setSelectedStatus] = useState("همه");

  const dispatch = useDispatch();
  const order = useSelector((state) => state.jobs.orders);
  const pagination = useSelector((state) => state.jobs.pagination);
  useEffect(() => {
    dispatch(getAllOrders(1));
  }, []);

  // ایجاد یک آرایه جداگانه حاوی تمام حالت‌های status
  const statusOptions = [
    "همه",
    "انجام شده",
    "لغوشده",
    "حمل به کارگاه ",
    "کار زمان بالا ",
    "در حال انجام",
    "در انتظار تایید",
  ];

  const [statusFilter, setStatusFilter] = useState("همه");
  // const statusJob = order.map((item) => item.jobsOrder.map((job) => job));

  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
      dispatch(getAllOrders(page));
      // در اینجا منتظر بمانید تا درخواست جدید تکمیل شود
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
    return getStatusText(card.jobsOrder[0].statusJob) === statusFilter;
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
