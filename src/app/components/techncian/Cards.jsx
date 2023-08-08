import React from "react";
import Card from "./componentsTech/Card";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/jobs";

function Cards() {
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

  // ایجاد دو state برای نگهداری حالت انتخاب شده در هر select
  const [statusFilter, setStatusFilter] = useState("همه");

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
      {statusOptions.map((statusOption) => (
        <option key={statusOption} value={statusOption}>
         <select> {statusOption}</select>
        </option>
      ))}
      <div className="d-flex flex-wrap mt-2">
        {filteredData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </>
  );
}

export default Cards;
