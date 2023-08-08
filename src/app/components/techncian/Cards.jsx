import React from "react";
import Card from "./componentsTech/Card";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/jobs";
import { Dropdown } from "react-bootstrap";

function Cards() {
  const [selectedStatus, setSelectedStatus] = useState("همه");

  const dispatch = useDispatch();
  const order = useSelector((state) => state.jobs.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  // ایجاد یک آرایه جداگانه حاوی تمام حالت‌های status
  const statusOptions = [
    "همه",
    "در حال پردازش",
    "لغو شده",
    "تحویل داده شده",
    "حمل به کارگاه",
  ];
  const [statusFilter, setStatusFilter] = useState("همه");
  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };
  
  // فیلتر کردن آرایه cardsData بر اساس status انتخاب شده
  const filteredData = order.filter((card) => {
    if (statusFilter === "همه") {
      return true;
    }
    return card.status === statusFilter;
  });
 
  // // ایجاد select ها برای فیلتر کردن بر اساس status
  // const statusSelects =
  // ));
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
        {filteredData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </>
  );
}

export default Cards;
